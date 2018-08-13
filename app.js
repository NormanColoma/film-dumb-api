const database = require('./database/database-handler');
const express = require('express');
const app = express();

const { port } = require('./config').app;

const filmsRoutes = require('./rest').filmRoutes;

database.connect();

app.use(filmsRoutes);
app.listen(port, () => console.log('App started!'));