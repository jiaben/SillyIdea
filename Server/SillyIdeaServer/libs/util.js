module.export = {
  check_uid: function (req){
    return false;
  },
  get_idea_id: function (req){
    return req.body['idea_id'];
  },
  get_user_id: function (req){
    return req.body['user_id'];
  },
  get_user_sess:function (req){
    return req.body['sess'];
  },
  resp_404_page: function(res, mesg){
    return;
  },
  resp_json_content: function(res, mesg){
    return;
  },

  dict_to_json: function(content_dict){
    return {};
  },
  resp_succ_page: function(res){
    return;
  },
  resp_fail_page: function(res){
    return;
  }
 
}

