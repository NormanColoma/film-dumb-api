const MongoClient = require('mongodb').MongoClient;
const { connection_uri, name } = require('../config').database;

class DatabaseHandler {
    static getInstance() {
        if (!this.instance) {
            DatabaseHandler.connect();
        }
        return this.instance; 
    }

    static connect(){
        MongoClient.connect(connection_uri, { useNewUrlParser: true })
            .then((client) => {
                console.log('Database connected...')
                this.instance = client.db(name);
        });
    }
}

module.exports = DatabaseHandler;