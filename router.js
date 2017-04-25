var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
// var queries = require('./db/queries')

router.use(bodyParser.json())

router.get('/posts', function(req, res, next){
  res.send('Hello World')
})

module.exports = router
