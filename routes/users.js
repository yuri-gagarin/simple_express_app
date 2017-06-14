var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(request, response) {

  response.sendStatus(200);
  response.send({
    "userId": request.params.id
  });
  console.log(request.params);
});




module.exports = router;
