const express = require('express');

const presentationController = require('../controllers/presentationController');

const router = express.Router();

router
  .route('/')
  .get(presentationController.renderPresentation)
  .patch(presentationController.updatePresentation);

module.exports = router;
