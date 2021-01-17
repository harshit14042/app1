// //const logger=require('./logger');
// ////console.log(logger);
// //logger('message');
// //Built-in Path Module
// const path=require('path');

// var pathObj=path.parse(__filename);

// console.log(pathObj);

// const os= require('os');
// var totalMem=os.totalmem()/1000000000;
// var freeMem=os.freemem()/1000000000;

// console.log(`Total Memory: ${totalMem}GB\nFree Memory: ${freeMem}GB`);

// const fs=require('fs');
// //This is for sync method
// const fileNames=fs.readdirSync('./');

// console.log(fileNames);
// //This is for async method
// fs.readdir('./',function(err, files){
//     if(err) console.log(err);
//     else console.log(files);
// });

// // Events Module
// const EventEmitter = require('events');

// const emitter=new EventEmitter();

// emitter.addListener('messageLogged',function(){
//     console.log('Listener Called');
// });
// emitter.emit('messageLogged');

// emitter.addListener('messageLogged',(e)=>{
//     console.log('Listener Called ',e);;
// });

// emitter.emit('messageLogged',{data:'message'});




// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged',(arg)=>{
//     console.log(arg);
// });

// logger.log('This is the message');

// const http=require('http');



// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('This is the homepage');
//         res.end();
//     }
//     if(req.url==='/api/numlist'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listeing on port 3000');