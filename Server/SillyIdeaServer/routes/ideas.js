var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET users listing. */
router.get('/:ideaid/', function(req, res, next) {
    console.log("ideaid:"+req.params['ideaid']);
    res.send(req.params);
});

var page_unit = 100;

router.use(bodyParser.json());

router.get('/list', function(req, res, next){
  if (!check_uid(req)){
    resp_404_page(res, global_msg['invalid_uid']);
    return;
  }
  var page = req.body['page'];
  res.send('put a resource');
});

router.get('/:ideaid', function(req, res, next){
  if (!check_uid(req)){
    resp_404_page(res, global_msg['invalid_uid']);
    return;
  }
  var uid = get_user_id(req);
  var iid = req.params['ideaid'];
  
  if (typeof(iid) == 'NaN'){
    resp_404_page(req, global_msg['invalid_iid']);
    return;
  }

  var db = new DBConn();
  db.conn();
  var idea = db.get_idea_by_id(iid);
  resp_json_content(dict_to_json(idea));
}

router.post('/', function(req, res, next){
  if (!check_uid(req)){
    resp_404_page(res, global_msg['invalid_uid']);
    return;
  }
  var uid = get_user_id(req);

  //get idea content.
  var flags = req.body['flags'];
  var content = req.body['content'];
  var db = new DBConn();
  db.conn();
  var new_idea_id = db.add_idea(uid, content);
  resp_json_content(dict_to_json({id: new_idea_id});
});

router.put('/', function(req, res, next){
  if (!check_uid(req)){
    resp_404_page(res, global_msg['invalid_uid']);
    return;
  }
  var uid = get_user_id(req);

  //get idea content.
  var flags = req.body['flags'];
  var content = req.body['content'];
  var idea_id = req.body['idea_id'];
  var db = new DBConn();
  db.conn();
  if (db.update_idea_by_id(idea_id, content)){
    resp_fail_page(res);
    return;
  }
  resp_succ_page(res);
  
});


router.delete('/:ideaid', function(req, res, next) {
  var iid = req.params['ideaid'];
  if (typeof(iid) == 'NaN'){
    resp_404_page(res, global_msg['bad_request']);
    return;
  }
  var db = new DBConn();
  db.conn();
  if (!db.del_idea_by_id(id)){
    resp_fail_page(res);
    return;
  }
  resp_succ_page(res);
});


module.exports = router;
