const rabbitmq = require('./rabbitmq-handler');

class FilmDownloadEventEmitterService {
    emit(filmDownloaded) {
        const channel = rabbitmq.getInstance();
        const exchange = 'film.analytics.events';
        const key = 'film.download';

        channel.publish(exchange, key, Buffer.from(`${filmDownloaded}`));

        console.log(" [x] Sent 'Hello World!'");
    }
}

module.exports = FilmDownloadEventEmitterService;