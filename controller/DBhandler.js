
var mongo = require("mongodb").MongoClient;

var serverConf = require('../serverConfig');

var dbUrl = serverConf.devConfig.DB_URL; 

if(process.env.NODE_ENV === 'production') dbUrl = serverConf.prdConfig.DB_URL;


var DBhander = {};

function queryUser(id, sucCal, errCal){
	// 根据用户名查询用户信息, 回调中返回信息; 查询失败则回调返回 err
	mongo.connect(dbUrl, function(err, db){
	  var userList = db.collection('userList');
	  userList.find({_id:id},{}).toArray(function(err, docs){
			if(err) {
				db.close();
				errCal(err);
			} else {
				db.close();
				sucCal(docs);
			}
	  });
	});		
}

DBhander.insertUser = function(obj, sucCal, errCal){
	// 插入一条新用户 成功返回 cb(obj) 失败返回 err
	mongo.connect(dbUrl, function(err, db){
	  if(err){
		  db.close();
		  errCal(err);
	  } else {
	    var userList = db.collection('userList');
	    // 插入开销大，先查询，为新用户再插入
	    queryUser( // 先查询
	    	obj.id,
	    	function(data){ // 查询成功返回
	    		if(data.length === 0){ // 用户不存在
			    	var _timestamp = new Date().getTime();
				    userList.insert( // 插入
				    	[{
				    		_id: obj.id,
				    		name: obj.name,
				    		email: obj.email,
				    		timestamp: _timestamp
				    	}],
				    	function(){ // 插入成功, end
			        	db.close();
			        	sucCal(obj);
				    	}
				    );
	    		} else { // 用户已存在
	    			db.close();
	    			errCal('EXIST_USER'); // 插入失败, end
	    		}
	    	}, 
	    	function(err){ // 查询失败, end
	    		db.close();
	    		errCal(err);
				}
			);
	  }
	})
}

DBhander.queryPolls = function(id, sucCal, errCal) { // 根据用户 id 查询 poll
	mongo.connect(dbUrl,function(err, db){
	  var pullList = db.collection('pollList');
	  pullList.find({_id: id},{}).sort({timestamp: -1}).toArray(function(err, docs){
      if(err){
      	db.close();
      	errCal(err);
      } else {
      	db.close();
      	sucCal(docs);
      }
	  });
	});		
},

DBhander.updatePolls = function(id, sucCal, errCal) { // 根据用户 id 查询 poll
	mongo.connect(dbUrl,function(err, db){
	  var pullList = db.collection('pollList');
	  pullList.update({_id: id},{}).sort({timestamp: -1}).toArray(function(err, docs){
      if(err){
      	db.close();
      	errCal(err);
      } else {
      	db.close();
      	sucCal(docs);
      }
	  });
	});		
},

module.exports = DBhander;