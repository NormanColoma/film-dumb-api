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
            conn.createChannel((err, ch) => {
                const exchange = 'film.analytics.events';
                const exchange_type = 'direct';
                
                ch.assertExchange(exchange, exchange_type, { durable: false });

                this._instance = ch;
                console.log('Rabbitmq connected...');
            });
        });
    }
}

module.exports = RabbitmqHandler;