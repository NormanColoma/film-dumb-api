const rabbitmq = require('./rabbitmq-handler');

class FilmViewEventEmitterService {
    emit(filmId) {
        const channel = rabbitmq.getInstance();
        const exchange = 'film.analytics.events';
        const key = 'film.view';

        channel.publish(exchange, key, Buffer.from(`view film ${filmId}`));
    }
}

module.exports = FilmViewEventEmitterService;