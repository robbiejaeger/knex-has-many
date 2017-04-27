var queries = require('../models/comment')

function index(req, res, next) {
  queries.getAllForPost(req.params.postID)
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
