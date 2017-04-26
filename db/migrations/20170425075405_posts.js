
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments('id').primary()
    table.string('title').notNullable()
    table.text('body').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
