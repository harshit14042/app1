const express=require('express');
const app=express();
const Joi = require('joi');
const logger = require('./logger');
const config = require('config');

const courses=require('./routes/courses');

//DEBUG=app:db nodemon index.js or DEBUG=app:*
const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

console.log(config.get("name"));
console.log(config.get("mail.host"));
console.log(config.get("password"));

app.use('/api/courses',courses);

app.use(logger);

console.log(`Environment: ${app.get('env')}`);

startUpDebugger('App started successfully....');

dbDebugger('DB connected....');




app.get('/',(req,res)=>{
    // res.send('Hello Express!!!');
    res.render('index',{title: "My Application", body: "Hello There Express!!!"});
});



app.get('/api/info',(req,res)=>{
    console.log(req);
    console.log(res);
    res.send('Check the console');
});

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params);
    // res.send(req.query);
});



const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});