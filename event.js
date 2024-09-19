import EventEmitter from "node:events";
import { Dice } from "./modules/Dice.js";
import { Logger } from "./modules/Logger.js";

const emitter = new EventEmitter();

emitter.on('click', () => {
    console.log('Event click 1');
});
emitter.on('click', () => {
    console.log('Event click 2');
});
emitter.on('click', () => {
    console.log();
});

emitter.emit('click');


emitter.once('error', () => {
    console.log('Error Once 1');
});
emitter.once('error', () => {
    console.log('Error Once 2');
});

emitter.emit('error');

emitter.once('error', () => {
    console.log();
});

emitter.emit('error');


const dice = new Dice(emitter);



dice.roll();
emitter.once('rolled', (result) => {
    console.log()
});
dice.roll();


const logger = new Logger(emitter)

logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")
