const express = require('express');
const path = require('path');
const apicache = require('apicache');

const router = express.Router();
let cache = apicache.middleware

let {Sports} = require(path.join(process.cwd(), 'models'));

router.get('/', cache('1 minutes'), (req, res) => {
  let start = new Date().getTime();
  findSports().then(result => {
    res.json(result);
    let end = new Date().getTime();
    console.log(`${end - start}ms`);
  }).catch(err => {
    res.status(500).json(err);
  })
});

function findSports() {
  return new Promise((resolve, reject) => {
    Sports.find({cafename: '테스트'}).exec((err, items) => {
      err? reject(err): resolve(items);
    });
  });
}

module.exports = router;
