const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/projects', apiController.getAllProjects);

router.get('/projects/:id', apiController.getProject);

router.get('/presentation', apiController.getPresentation);

router.get('/testdata', apiController.getPresentation);

module.exports = router;
