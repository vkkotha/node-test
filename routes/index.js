var express = require('express');
var router = express.Router();

const sleep = async(t) => {
  return new Promise(resolve => setTimeout(resolve, t));
}

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.header("Content-Type", "text/html");
  res.end("Hello world");
});

router.get('/slow', async(req, res, next) => {
  res.header("Content-Type", "text/html");
  await sleep(1000);
  res.end("Hello world");
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get('/random', async(req, res, next) => {
  res.header("Content-Type", "text/html");
  let r = getRandomInt(1, 2000);
  const p = getRandomInt(1, 10);
  if (p > 6) {
    r = getRandomInt(2001, 10000);
  }
  console.log('Sleeping for ' + r + ' ms');
  await sleep(r);
  res.end("Hello world");
});

module.exports = router;
