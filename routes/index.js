var express = require('express');
var router = express.Router();

const sleep = async(t) => {
  return new Promise(resolve => setTimeout(resolve, t));
}

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.header("Content-Type", "text/html");
  await sleep(1000);
  res.end("Hello world");
});

module.exports = router;
