const FilmRepository = require('../domain/repository/films-repository');

class SeeFilmInfo {
    constructor() {
        this.filmRepository = new FilmRepository();
    }

    execute(filmId) {
        return this.filmRepository.findById(filmId);
    }
}

module.exports = SeeFilmInfo;