'use strict'

const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const config = require('./config');

const app = express();
const api = require('./route');
var path = require("path");

app.use(bodyparser.urlencoded({extends: false}));
app.use(bodyparser.json());
app.get('/', (req, res) =>
	{
		res.sendFile(path.join(__dirname+'/profile/build/index.html'));
	});

app.use('/api', api);


mongoose.connect(config.db, (error, res) =>
{
	if(error)
	{
		 return console.log(`Error al conectar con base de datos: ${error}`)
	}
	else
	{
		console.log('conexion a la bd establecida')
		app.listen(config.port, () =>
		{
			console.log(`API REST Corriendo en http://localhost:${config.port}`);
		})
	}
});
