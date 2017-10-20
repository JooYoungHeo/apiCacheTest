const express = require('express');
let dataInfo = require('./dataInfo');

const router = express.Router();
router.use('/express/datas', dataInfo);

module.exports = router;
