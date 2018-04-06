var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:user/', function(req, res, next){
  var user = req.params['user'];
  if (user == 'jiaben'){
    res.send('welcome '+ user);
  }else{
    res.send('unknown user!');
  }
});

module.exports = router;
