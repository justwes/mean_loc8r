const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET Hompage */

router.get('/', ctrlMain.index);

module.exports = router;
