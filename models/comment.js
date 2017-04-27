var knex = require('../db/knex')

function Comments(){
  return knex('comments')
}

function getAllForPost(postID){
  return Comments().where('post_id', parseInt(postID))
}

module.exports = {
  getAllForPost: getAllForPost
}
