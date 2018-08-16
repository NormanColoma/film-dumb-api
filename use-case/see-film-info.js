const FilmRepository = require('../adapter/persitence/films-repository');
const FilmViewEventEmitterService = require('../adapter/messaging/film-view-event-emitter');


class SeeFilmInfo {
    constructor() {
        this.filmRepository = new FilmRepository();
        this.filmViewEventEmitterService = new FilmViewEventEmitterService();
    }

    execute(filmId) {
        this.filmViewEventEmitterService.emit(filmId);
        return this.filmRepository.findById(filmId);
    }
}

module.exports = SeeFilmInfo;