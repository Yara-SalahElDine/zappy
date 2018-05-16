process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
chai.use(chaiHttp);


describe('Tweets', function() {
  
    it('should list ALL tweets on /tweets GET', function(done) {
      chai.request(server)
        .get('/tweets')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('_id');
          res.body[0].should.have.property('created_at');
          res.body[0].should.have.property('text');
          res.body[0].should.have.property('id_str');
          res.body[0].should.have.property('username');
          done();
        });
    });


  

  
  });