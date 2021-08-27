//Step 3: Hello World
console.log('hello world!')

// Step 5: Events & Emitters
//create
const { EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

//Handle
eventEmitter.on('lunch', () => {
    console.log('yum 🍣');
});

//Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

//Step 6: Working with the File System
const  {readFile, readFileSync} = require('fs');

//Blocking
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

//Non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});
