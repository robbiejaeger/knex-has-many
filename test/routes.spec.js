process.env.NODE_ENV = 'test'

var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var server = require('../server')
var knex = require('../db/knex')

chai.use(chaiHttp)

describe('API Routes', function(){

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done()
        })
      })
    })
  })

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done()
    })
  })

  describe('GET /api/v1/posts', function(){
    it('should return all blog posts', function(done){
      chai.request(server)
      .get('/api/v1/posts')
      .end(function(err, res){
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body.length.should.equal(2)
        res.body[0].should.have.property('title')
        res.body[0].title.should.equal('Post 1')
        res.body[0].should.have.property('body')
        res.body[0].body.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        done()
      })
    })
  })

  describe('DELETE api/v1/posts/:id', function(){
    it('should delete a single post', function(done){
      chai.request(server)
      .delete('/api/v1/posts/1')
      .end(function(err, res){
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('title')
        res.body.title.should.equal('Post 1')
        res.body.should.have.property('body')
        res.body.body.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        chai.request(server)
        .get('/api/v1/posts')
        .end(function(err, res){
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('array')
          res.body[0].should.have.property('title')
          res.body[0].title.should.equal('Post 2')
          res.body[0].should.have.property('body')
          res.body[0].body.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
          done()
        })
      })
    })
  })
})
