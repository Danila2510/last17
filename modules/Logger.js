class Logger{
    #_emitter;
    constructor(emitter) {
        this.#_emitter = emitter;
        this.#_emitter.on('info', (message) => {
            console.log(`Info log: ${message}`);
        });
        this.#_emitter.on('warning', (message) => {
            console.log(`Warning: ${message}`);
        });
        this.#_emitter.on('error', (message) => {
            console.error(`Error: ${message}`);
        });
    }
    info(message) {
        this.#_emitter.emit('info', message);
    }
    warning(message) {
        this.#_emitter.emit('warning', message);
    }
    error(message) {
        this.#_emitter.emit('error', message);
    }
}

export {Logger}