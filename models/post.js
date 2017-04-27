var knex = require('../db/knex')

function Posts(){
  return knex('posts')
}

function getAll(){
  return Posts().select()
}

function getSingle(postID){
  return Posts().where('id', parseInt(postID)).first()
}

function deleteItem(postID){
  return Posts().where('id', parseInt(postID)).del()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  deleteItem: deleteItem
}
