const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/films');
const filmController = new FilmController();

router.get('/films/:id', (req, res) => {
    filmController.getFilmInfo(req.params.id)
        .then(data => res.send(data));
});

router.get('/films/:id/downloads', () => {
    res.send();
});

module.exports = router;