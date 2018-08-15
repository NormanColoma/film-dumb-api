const rabbitmq = require('./rabbitmq-handler');

class FilmDownloadEventEmitterService {
    emit(filmId) {
        const channel = rabbitmq.getInstance();
        const exchange = 'film.analytics.events';
        const key = 'film.download';

        channel.publish(exchange, key, Buffer.from(`${filmId}`));

        console.log(`film${filmId} was downloaded`);
    }
}

module.exports = FilmDownloadEventEmitterService;