module.export = {
  
}

var mysql= require('mysql');

function DBConn(){
  this.connect_info = {
    this.host     : '192.168.1.97';
    this.user     : 'root',
    this.password : 'abcd',
    this.port     : 33066,
  };
  this.connection = mysql.createConnection(this.connect_info);
}

DBConn.connect(){
  this.connection.connect(err => ({
    if (err){
      console.log('[query] - :' + err);
      return;
    }
    console.log('[connection connect] succeed!');
  }));
}

DBConn.get_idea_by_id(id, callback){
  var resultDict = {}
  callback(resultDict);
}

DBConn.del_idea_by_id(id, callback){
  var bResult = false;
  callback(bResult);
}

DBConn.get_ideas(page, unit, callback){
  var resultDict = {};
  callback(resultDict);
}

DBConn.update_idea_by_id(id, content, callback){
  var bResult = false;
  callback(bResult);
}

DBConn.add_idea(uid, content){
  var iIdeaId = 0;
  callback(iIdeaId);
}

DBConn.create_idea_id(uid, callback){
  var iIdeaId = 0;
  callback(iIdeaId);
}

