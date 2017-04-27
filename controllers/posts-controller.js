var queries = require('../models/post')

function index(req, res, next){
  queries.getAll()
  .then(function(posts){
    res.status(200).json(posts)
  })
  .catch(function(error){
    next(error)
  })
}

function remove(req, res, next){
  queries.getSingle(req.params.id)
  .then(function(post){
    queries.deleteItem(req.params.id)
    .then(function(){
      res.status(200).json(post)
    })
    .catch(function(error){
      next(error)
    })
  }).catch(function(error){
    next(error)
  })
}

module.exports = {
  index: index,
  remove: remove
}
