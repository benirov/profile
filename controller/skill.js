'use strict'

const Skills = require('../model/Skill');

function getSkill(req, res)
{
	Skills.find({}, (error, skill) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion : ${error}`})
		}
		else if(!skill || skill == '')
		{
			return res.status(404).send({message: `No existen Skill en la base de datos : ${error}`});
		}
		else
		{
			res.status(200).send(skill);
		}
	})	
}

function saveSkill(req, res)
{
	let Skill = new Skills;
	Skill.name = req.body.name;
	Skill.puntuation = req.body.puntuation;
	Skill.save((error, skill) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion : ${error}`});
		}
		else
		{
			res.status(200).send({message: `Skill save : ${skill}`});
		}
	})	
}

function updateSkill(req, res)
{
	let id = req.param.id;
	let dataUpdate = req.body;
	Skills.findByIdAndUpdate(id, dataUpdate, (error, skill) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion : ${error}`});
		}else
		{
			return res.status(500).send({message: `Skill actializada : ${skill}`});
		}
	});
}


module.exports = 
{
	getSkill,
	saveSkill,
	updateSkill
}