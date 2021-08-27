//Step 3: Hello World
console.log('hello world!')

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