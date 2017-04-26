var postQueries = require('../models/post')

function index(res, res, next){
  postQueries.getAll()
  .then(function(posts){
    res.status(200).json(posts)
  })
  .catch(function(error){
    next(error)
  })
}

module.exports = {
  index: index
}
