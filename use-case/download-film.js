const FilmRepository = require('../adapter/persitence/films-repository');
const FilmDownloadEventEmitterService = require('../adapter/messaging/film-download-event-emitter');

class DownloadFilm {
    constructor() {
        this.filmRepository = new FilmRepository();
        this.filmDownloadEventEmitterService = new FilmDownloadEventEmitterService();
    }

    execute(filmId) {
        this.filmDownloadEventEmitterService.emit(filmId);
        return this.filmRepository.downloadById(filmId);
    }
}

module.exports = DownloadFilm;