const SeeFilmInfo = require('../../use-case/see-film-info');
const DownloadFilm = require('../../use-case/download-film');

class FilmController {
    constructor() {
        this._seeFilmInfo = new SeeFilmInfo();
        this._downloadFilm = new DownloadFilm();
    }

    getFilmInfo(filmId) {
        return this._seeFilmInfo.execute(filmId);
    }

    downloadFilm(filmId) {
        return this._downloadFilm.execute(filmId);
    }
}

module.exports = FilmController;