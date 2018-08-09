const SeeFilmInfo = require('../../use-case/see-film-info');

class FilmController {
    constructor() {
        this._seeFilmInfo = new SeeFilmInfo();
    }

    getFilmInfo(filmId) {
        return this._seeFilmInfo.execute(filmId);
    }

    downloadFilm(filmId) {
        return {info: `Film ${req.params.id} was downloaded correctly`};
    }
}

module.exports = FilmController;