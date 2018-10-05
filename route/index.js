'use strict'

const express = require('express');

const coursesController = require('../controller/courses');
const skillController = require('../controller/skill');

const api = express.Router();
api.get('/courses', coursesController.getCourses);
api.post('/courses', coursesController.saveCourses);
api.put('/courses/:id', coursesController.updateCourses);
api.delete('/courses/:id', ProductCtrl.deleteCourse);

api.get('/skill', skillController.getSkill);
api.post('/skill', skillController.saveSkill);
api.put('/skill/:id', skillController.updateSkill);

module.exports = api;