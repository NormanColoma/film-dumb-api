const FilmRepository = require('../domain/repository/films-repository');

class DownloadFilm {
    constructor() {
        this.filmRepository = new FilmRepository();
    }

    execute(filmId) {
        return this.filmRepository.downloadById(filmId);
    }
}

module.exports = DownloadFilm;