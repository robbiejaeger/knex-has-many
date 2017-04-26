var knex = require('../db/knex')

function Posts(){
  return knex('posts')
}

function getAll(){
  return Posts().select()
}

module.exports = {
  getAll: getAll
}
