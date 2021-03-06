const express = require('express');

const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const projectsRouter = require('./projectRoutes');
const presentaionRouter = require('./presentationRoutes');

const router = express.Router();

router.use(authController.isLoggedIn);
router.use(authController.protect);

router.get('/', adminController.renderAdminIndex);
router.get('/create', adminController.renderCreate);
router.get('/update/:id', adminController.renderUpdate);
router.get('/delete/:id', adminController.deleteProjectAndReload);
router.get('/images/:id', adminController.renderEditImages);

router.use('/presentation', presentaionRouter);

router.use('/projects', projectsRouter);

module.exports = router;
