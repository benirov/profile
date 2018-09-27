'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const coursesModel = schema(
		{
			name: String,
			description: String,
			image: String,
			url: String,
			repository: String
		});

module.exports = mongoose.model('Courses', coursesModel);
