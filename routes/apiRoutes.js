const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router
  .route('/projects')
  .get(apiController.getAllProjects)
  .post(apiController.createProject);

router
  .route('/projects/:id')
  .get(apiController.getProject)
  .patch(apiController.updateProject)
  .delete(apiController.deleteProject);

module.exports = router;
