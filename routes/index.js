var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(request, response) {
  response.render('index', {
    title: "Yuriy",
    age: "30"
  });

  console.log(request.query)
});






module.exports = router;
