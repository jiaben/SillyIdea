module.export = {
  check_uid: function (req){
    var uid = req.param['uid'];
    if (isNaN(uid))
      return false;

    if (uid == 0)
      return false;

    return true;
  },
  get_idea_id: function (req){
    var iid = req.body['idea_id'];
    return iid;
  },

  get_user_id: function (req){
    var uid = req.param['user_id'];
    return uid;
  },

  get_user_sess:function (req){
    var sess = req.body['sess'];
    return sess;
  },

  resp_404_page: function(res, mesg){
    res.status(404).send(mesg);
    return;
  },

  resp_json_content: function(res, mesg){
    res.setHeader('Content-Type', 'application/json');
    res.send(mesg);
    return;
  },

  dict_to_json: function(content_dict){
    return {};
  },
  resp_succ_page: function(res){
    res.setHeader('Context-Type', 'text/plain');
    res.send('succ');
    return;
  },
  resp_fail_page: function(res){
    res.setHeader('Context-Type', 'text/plain');
    res.send('fail');
    return;
  }
 
}

