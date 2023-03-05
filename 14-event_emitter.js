const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received ${name} ${age}`);
});

customEmitter.on('response', () => {
    console.log(`same event different logic`);
});

customEmitter.emit('response', 'Kushal', '22')