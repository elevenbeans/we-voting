
var mongo = require("mongodb").MongoClient;

var serverConf = require('../serverConfig');

var dbUrl = serverConf.devConfig.DB_URL; 

if(process.env.NODE_ENV === 'production') dbUrl = serverConf.prdConfig.DB_URL;


var DBhander = {};

function queryUser(id, sucCal, errCal){
	// 根据用户名查询是否存在，存在回调返回信息; 其他则回调返回 err
	mongo.connect(dbUrl, function(err, db){
	   var userList = db.collection('userList');
	   userList.find({_id:id},{}).limit(1).toArray(function(err, docs){
	      if(err){
	        db.close();
	        errCal(err);
	      } else {
	        db.close();
        	sucCal(docs);
	      }
	   });
	});		
}

DBhander.insertUser = function(obj, sucCal, errCal){ // 插入一条新用户 成功返回 cb(true) 失败返回 false
	mongo.connect(dbUrl, function(err, db){
	  if(err){
		  db.close();
		  errCal(err);
	  } else {
	    var userList = db.collection('userList');
	    
	    queryUser(obj.id,
	    	function(data){
	    		if(data.length === 0){
			    	var _timestamp = new Date().getTime();
				    userList.insert(
				    	[{
				    		_id: obj.id,
				    		name: obj.name,
				    		email: obj.email,
				    		timestamp: _timestamp
				    	}],
				    	function(){
			        	db.close();
			        	sucCal(obj);
				    	}
				    );
	    		} else {
	    			db.close();
	    			errCal('EXIST_USER');
	    		}

	    	}, 
	    	function(err){
	    		db.close();
	    		errCal(err);
				}
			);
	  }
	})
}

DBhander.queryPoll = function(id, sucCal, errCal) { // 根据用户 id 查询 poll
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

DBhander.queryAllPoll = function(sucCal, errCal){ // 查询所有 poll
	mongo.connect(dbUrl,function(err, db){
	   var pullList = db.collection('pollList');
	   pullList.find({},{}).sort({timestamp: -1}).toArray(function(err, docs){
	      if(err){
	        db.close();
	        errCal(err);
	      } else {
	        db.close();
	      	sucCal(docs);
	      }
	   });
	});		
}

module.exports = DBhander;