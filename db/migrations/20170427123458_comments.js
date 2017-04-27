
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id').primary()
    table.string('username').notNullable()
    table.text('body').notNullable()
    table.integer('post_id').references('id').inTable('posts')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
