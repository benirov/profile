'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SkillModel = schema(
{
	name: String,
	puntuation: String
});

module.exports = mongoose.model('Skill', SkillModel);