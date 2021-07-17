const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router
  .route('/projects')
  .get(apiController.getAllProjects)
  .post(apiController.createProject);

module.exports = router;
