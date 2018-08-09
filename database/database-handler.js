const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'films';

class DatabaseHandler {
    static getInstance() {
        if (!this.instance) {
            DatabaseHandler.connect();
        }
        return this.instance; 
    }

    static connect(){
        MongoClient.connect(url, { useNewUrlParser: true })
            .then((client) => {
                console.log('Database connected...')
                this.instance = client.db(dbName);
        });
    }
}

module.exports = DatabaseHandler;