const database = require('./adapter/persitence/database-handler');
const rabbitmq = require('./adapter/messaging/rabbitmq-handler');

const express = require('express');
const app = express();

const { port } = require('./config').app;

const filmsRoutes = require('./rest').filmRoutes;

database.connect();
rabbitmq.connect();

app.use(filmsRoutes);
app.listen(port, () => console.log('App started!'));

const onProcessKilled = () => {
    console.log('closing connections...');
    database.close();
    rabbitmq.close();
    process.exit();
}

process.on('exit', () => onProcessKilled());
process.on('SIGINT', () => process.exit(137));
process.on('SIGTERM', () => process.exit(137));
process.on('SIGUSR1', () => process.exit(2));
process.on('SIGUSR2', () => process.exit(2));