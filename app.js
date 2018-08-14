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

process.on('SIGINT', () => {
    console.log('exiting...')
    process.exit();
});