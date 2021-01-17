// //(function(exports,require,modeule,__filename,__dirname){......Module Wrapper function
// console.log(__filename);
// console.log(__dirname);
// var url='';

const { EventEmitter } = require("events");

// function log(msg){
// 	//send http request
// 	console.log(msg);
// }

// module.exports=log;

class Logger extends EventEmitter{
	log(message){
		console.log(message);
		this.emit('messageLogged',{data:message});
	}
}

module.exports=Logger;