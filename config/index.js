const env = process.env.NODE_ENV;

const development = {
    app: {
        port: 3000
    },
    database: {
        connection_uri: 'mongodb://localhost:27017',
        name: 'films' 
    }
};

const config = {
    development
};

module.exports = config[env];