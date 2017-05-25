var app = require('../index');
var request = require('supertest')(app);
var should = require("should"); 

describe('Server', function() {
    describe('getPollList', function() {
        it('should return an Array', function(done) {
            request.post('/api/getPollList')
            .send({})
            .expect(200, function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.Array;
                done();
            });
        });
    });
    describe('getPollByID', function() {
        it('should return bool', function(done) {
            request.post('/api/getPollByID')
            .send({pollID:"1494907457596"})
            .expect(200, function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.Array;
                done();
            });
        });
    });
    describe('insertPoll', function() {
        it('should return an bool', function(done) {
            request.post('/api/insertPoll')
            .send({
            	description:"asdf",
            	options:[{
            		option: "asdf",
            		count: 0,
            		index: 0
            	}, {
            		option: "sadf",
            		count: 0,
            		index: 1
            	}],
							ownerName: "elevenBeans",
							title:"asdf",
							voterList:[]
						})
            .expect(200, function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.Boolean;
                done();
            });
        });
    });
    describe('upDatePollByID', function() {
        it('should return an bool', function(done) {
            request.post('/api/upDatePollByID')
            .send({
			        'pollID': '1494907457596',
			        'index': 0,
			        'voter': 'unit test'
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.should.be.Boolean;
                done();
            });
        });
    });
});