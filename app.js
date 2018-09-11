const database = require('./adapter/persitence/database-handler');
const rabbitmq = require('./adapter/messaging/rabbitmq-handler');

const express = require('express');
const app = express();

const { port } = require('./config').app;

const filmsRoutes = require('./rest').filmRoutes;

database.connect();
rabbitmq.connect();

app.use(filmsRoutes);
const server = app.listen(port, () => console.log('App started!'));

const closeConnectionsAndExit = () => {
    console.log('Server closed correctly!! Closing connections...');
    database.close()
        .then(() => rabbitmq.close());
    process.exit(0);
}

const onProcessKilled = () => {
    console.log('Trying to close server...')
    server.close(() => closeConnectionsAndExit());
}

process.on('SIGINT', () => onProcessKilled());
process.on('SIGTERM', () => onProcessKilled());
process.on('SIGUSR1', () => onProcessKilled());
process.on('SIGUSR2', () => onProcessKilled());