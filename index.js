// //Step 3: Hello World
// console.log('hello world!')
//
// // Step 5: Events & Emitters
// //create
// const { EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
//
// //Handle
// eventEmitter.on('lunch', () => {
//     console.log('yum 🍣');
// });
//
// //Emit
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
//
// //Step 6: Working with the File System
// const  {readFile, readFileSync} = require('fs');
//
// //Blocking
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);
//
// //Non-blocking
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// });

//Step 7 - Modules and NPM
//We shall be using the cool.js code by importing it
// const {hello} = require('./cool.js');
// console.log(hello);

const express = require('express');
const {response} = require("express");
const app = express();

const {readFile} = require('fs').promises;

app.get('/', async (req, resp) => {
    resp.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))