const MongoFilmRepository = require('../../persitence/mongo-film-repository');
const Film = require('../../domain/film');
const DonwlodableFilm = require('../../domain/downlodable-film');

class FilmRepository {
    constructor() {
        this.mongoFilmRepository = new MongoFilmRepository();
    }
    
    findById(id) {
        const { mongoFilmRepository } = this;

        return mongoFilmRepository.findById(id)
            .then(film => new Film(film));
    }

    downloadById(id) {
        const { mongoFilmRepository } = this;

        return mongoFilmRepository.findById(id)
            .then(film => new DonwlodableFilm(film));
    }
}

module.exports = FilmRepository;