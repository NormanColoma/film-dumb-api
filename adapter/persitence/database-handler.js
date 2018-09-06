const MongoClient = require('mongodb').MongoClient;
const { connection_uri, name } = require('../../config').database;

class DatabaseHandler {
    static getInstance() {
        if (!this._instance) {
            DatabaseHandler.connect();
        }
        return this._instance; 
    }

    static connect(){
        MongoClient.connect(connection_uri, { useNewUrlParser: true })
            .then((client) => {
                console.log('Database connected...');
                this._client = client;
                this._instance = client.db(name);
            })
            .catch(err => console.info('There was an error while trying to connect to MongoDB', err));
    }

    static close() {
        if (this._client) {
            this._client.close();
        }
    }
}

module.exports = DatabaseHandler;