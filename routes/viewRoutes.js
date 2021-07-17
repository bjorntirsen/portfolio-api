const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsController.renderIndex);

router
  .route('/login')
  .get(viewsController.renderLogin)
  .post(authController.login);

router.get('/', viewsController.renderIndex);
router.get('/admin', viewsController.renderAdmin);

module.exports = router;
