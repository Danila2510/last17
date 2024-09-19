class Dice {
    #_emitter;
    constructor(emitter) {
        this.#_emitter = emitter;
        this.#_emitter.on('rolled', (result) => {
            console.log(`Result: ${result}`)
        });
    }
    roll() {
        const result = Math.floor(Math.random() * 6) + 1;
        this.#_emitter.emit('rolled', result);
    }
}

export { Dice }