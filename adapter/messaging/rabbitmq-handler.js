const amqp = require('amqplib/callback_api');

class RabbitmqHandler {

    static getInstance() {
        if (!this._instance) {
            RabbitmqHandler.connect();
        }
        return this._instance;
    }
    static connect() {
        amqp.connect('amqp://localhost', (err, conn) => {
            if (err) {
                console.info('There was an error while trying to connect to rabbitmq: ', err);
                return;
            }
            conn.createChannel((err, ch) => {
                const exchange = 'film.analytics.events';
                const exchange_type = 'direct';
                
                ch.assertExchange(exchange, exchange_type, { durable: false });

                this._instance = ch;
                this._connection = conn;
                console.log('Rabbitmq connected...');
            });
        });
    }

    static close() {
        if (this._connection) {
            this._connection.close();
        }
    }
}

module.exports = RabbitmqHandler;