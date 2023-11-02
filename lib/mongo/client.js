const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const options = {};

global._mongoClientPromise = null;

class Singleton {
    constructor() {
        this.client = new MongoClient(uri, options);
        this.clientPromise = this.client.connect();
        if (process.env.NODE_ENV === 'development') {
            global._mongoClientPromise = this.clientPromise;
        }
    }

    static get instance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance.clientPromise;
    }
}

const clientPromise = Singleton.instance;

module.exports = clientPromise;
