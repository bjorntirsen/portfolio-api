const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/projects', apiController.getAllProjects);

router.get('/projects/:id', apiController.getProject);

module.exports = router;
