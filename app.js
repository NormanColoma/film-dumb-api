const database = require('./database/database-handler');
const express = require('express');
const app = express();

const filmsRoutes = require('./rest').filmRoutes;

database.connect();

app.use(filmsRoutes);
app.listen(3000, () => console.log('Example app listening on port 3000!'));