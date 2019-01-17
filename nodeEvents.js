var events = require('events');

var eventEmitter = new events.EventEmitter();

//result of event
var message = function(){
    console.log("You fired off an event");
}


//crates a listener
eventEmitter.on("evnt", message);

module.exports.nodeevnets = function(){
    eventEmitter.emit('evnt');
}
