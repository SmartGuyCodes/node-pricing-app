// console.log('hello world!')
//creat
const { EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

//Handle
eventEmitter.on('lunch', () => {
    console.log('Yummie!!');
});