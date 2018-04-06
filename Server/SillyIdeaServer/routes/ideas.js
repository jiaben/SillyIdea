var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET users listing. */
router.get('/:ideaid/', function(req, res, next) {
    console.log("ideaid:"+req.params['ideaid']);
    res.send(req.params);
});


router.use(bodyParser.json());

router.put('/', function(req, res, next){
    console.log(req.params);
    console.log(req.body);
    res.send('put a resource');
});

router.head('/', function(req, res, next) {
    res.send('head a resource');
});

router.delete('/', function(req, res, next){
    res.send('delete a resource')
})

module.exports = router;