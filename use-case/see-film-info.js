const FilmRepository = require('../adapter/persitence/films-repository');

class SeeFilmInfo {
    constructor() {
        this.filmRepository = new FilmRepository();
    }

    execute(filmId) {
        return this.filmRepository.findById(filmId);
    }
}

module.exports = SeeFilmInfo;