const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/createProject', apiController.createProject);

module.exports = router;
