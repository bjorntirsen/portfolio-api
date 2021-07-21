const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/logout', authController.logout);

router.use(authController.isLoggedIn);

router.get('/', viewsController.renderIndex);
router.get('/list', viewsController.renderList);
router.get('/projects/:id', viewsController.renderProjectDetails);

router
  .route('/login')
  .get(viewsController.renderLogin)
  .post(authController.login);

module.exports = router;
