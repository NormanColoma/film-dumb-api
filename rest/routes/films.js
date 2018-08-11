const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/films');
const filmController = new FilmController();

router.get('/films/:id', (req, res) => {
    const { id: filmId } = params;

    filmController.getFilmInfo(filmId)
        .then(data => res.send(data));
});

router.get('/films/:id/downloads', ({ params }, res) => {
    const { id: filmId } = params;

    filmController.downloadFilm(filmId)
        .then(data => res.send(data));
});

module.exports = router;