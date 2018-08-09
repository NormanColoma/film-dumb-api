const database = require('../database/database-handler');
const { ObjectId } = require('mongodb');

class MongoFilmRepository {
    findById(id) {
        const mongoRepository = database.getInstance().collection('film');

        return mongoRepository.findOne({'_id': ObjectId(id)});
    }
}

module.exports = MongoFilmRepository;