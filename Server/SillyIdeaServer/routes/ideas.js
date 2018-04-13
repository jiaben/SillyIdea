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
  var db = new DBConn();
  db.get_ideas(params, page_unit, resultDict => {
    resp_json_content(dict_to_json(resultDict));
  }
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
  db.get_idea_by_id(iid, (jsonObj)=> {
    resp_json_content(dict_to_json(jsonObj));
    }
  );
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
  db.add_idea(uid, iid => {
    var res_dict = {};
    res_dict['id'] = iid;
    resp_json_content(dict_to_json(res_dict))
  }
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
  db.update_idea_by_id(idea_id, content, bResult=>{
    if(bResult){
      resp_succ_page(res);
    }
    else{
      resp_fail_page(res);
    }
  });
  
});


router.delete('/:ideaid', function(req, res, next) {
  var iid = req.params['ideaid'];
  if (typeof(iid) == 'NaN'){
    resp_404_page(res, global_msg['bad_request']);
    return;
  }
  var db = new DBConn();
  db.del_idea_by_id(id, bResult=>{
    if(bResult){
      resp_succ_page(res);
    }
    else{
      resp_fail_page(res);
    }
  });
});


module.exports = router;
