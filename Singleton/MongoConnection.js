import mongoose from "mongoose";

export default class MongoConnection {
    static #instance

    constructor() {
        mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    static getInstance() {
        if (this.#instance) {
            console.log('Already connected!')
            return this.#instance
        }
        this.#instance = new MongoConnection()
        console.log('Connected!')
        return this.#instance
    }
}