const express = require('express');

const projectController = require('../controllers/projectController');
const imageController = require('../controllers/imageController');

const router = express.Router();

router.post('/', projectController.createProject);

router
  .route('/:id')
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

router.post(
  '/image/:id',
  imageController.uploadSingle,
  imageController.afterUpload
);
//router.post('/images/:id', imageController.updateProject);

module.exports = router;
