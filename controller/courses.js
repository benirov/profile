'use strict'

const Courses = require('../model/courses');

function getCourses(req, res)
{
	Courses.find({}, (error, courses) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion : ${error}`});
		}
		else if(!courses || courses == '')
		{
			return res.status(404).send({message: `No existen cursos en la base de datos : ${error}`});
		}
		else
		{
			res.status(200).send(courses);
		}
	
});

}

function saveCourses(req, res)
{
	let Course = new Courses;
	Course.name = req.body.name;	
	Course.description = req.body.description;
	Course.image = req.body.image;
	Course.url = req.body.url;
	Course.repository = req.body.repository;
	Course

	Course.save((error, saveProduct) =>
	{
		if(error)
		{
			return res.status(500).send({messaje: `Error al realizar la peticion: ${error}`})
		}
		else
		{
			res.status(200).send({message: `producto guardado: ${saveProduct}`});
		}
	});
}

function updateCourses(req, res)
{
	let id = req.params.id
	let dataUpdate = req.body;

	Courses.findByIdAndUpdate(id, dataUpdate, (error, updateProduct) =>
	{
		if(error)
		{
			return res.status(500).send({messaje: `Error al realizar la peticion: ${error}`})
		}
		else
		{
			res.status(200).send({message: `producto actualizado: ${updateProduct}`});
		}
	});
}



function deleteCourse(req, res)
{
  let id = req.params.id;

  Product.findById(id, (error, course) =>
  {
    if(error)
    {
      res.status(500).send({message: `Error al eliminar proyecto: ${error}`});
    }
    else
    {
      course.remove(err =>
        {
          if(err)
          {
            res.status(500).send({message: `Error al eliminar proyecto: ${err}`});
          }
          else
          {
            res.status(200).send({message: `proyecto con id: ${id} eliminado`});
          }
        });
    }
  });

}



module.exports = 
{
	getCourses,
	saveCourses,
	updateCourses,
	deleteCourse
}
