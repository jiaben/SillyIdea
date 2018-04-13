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

DBConn.get_idea_by_id(id){
  
  return {};
}

DBConn.del_idea_by_id(id){
  return false;
}

DBConn.get_ideas(page, unit){
  return [{}];
}

DBConn.update_idea_by_id(id, content){
  return false;
}

DBConn.add_idea(uid, content){
  return 0;
}

DBConn.create_idea_id(){
  return 0;
}

