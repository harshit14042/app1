const express=require('express');

const router = express.Router();

const courses = [
    {id:1, name:"Course 1"},
    {id:2, name:"Course 2"},
    {id:3, name:"Course 3"}
];

router.get('/',(req,res)=>{
    res.send(courses);
});

router.get('/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('Course Not Found...');
    res.send(course);
});

router.post('/',(req,res)=>{
    const error = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
    }
    const course={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course not found');
    }
    const error = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
    }
    course.name=req.body.name;
    res.send(course);
});

function validateCourse(course){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    });
    const {error} = schema.validate(course);
    return error;
}

module.exports = router;