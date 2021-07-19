const express = require('express');
const apiController = require('../controllers/apiController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/projects')
  .get(apiController.getAllProjects)
  .post(authController.protect, apiController.createProject);

router
  .route('/projects/:id')
  .get(apiController.getProject)
  .patch(authController.protect, apiController.updateProject)
  .delete(authController.protect, apiController.deleteProject);

module.exports = router;
