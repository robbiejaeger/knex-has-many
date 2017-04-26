var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var postQueries = require('./models/post')

router.use(bodyParser.json())

router.get('/posts', function(req, res, next){
  postQueries.getAll()
  .then(function(posts){
    res.status(200).json(posts)
  })
  .catch(function(error){
    next(error)
  })
})

module.exports = router
