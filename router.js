var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var postController = require('./controllers/posts-controller')

router.use(bodyParser.json())

router.get('/posts', function(req, res, next){
  postController.index(res, res, next)
})

module.exports = router
