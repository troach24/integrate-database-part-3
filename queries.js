const database = require("./database-connection");

module.exports = {
    list(){
        return database('game').select();
    },
    read(id){
        return database('game').select().where("id", id).first();
    },
    create(game){
        return database('game').insert(game).returning('*').then(record => record[0]);
    },
    update(id, game){
        return database('game').where("id", id).update(game, "*").then(record => record[0]);
    },
    delete(id){
        return database('game').where("id", id).del();
    }
};
