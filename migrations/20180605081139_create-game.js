
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', game => {
    game.increments();
    game.text('name');
    game.text('developer');
    game.float('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
};
