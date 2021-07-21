const express = require('express');
// const multer = require('multer');
// const { storage } = require('../cloudinary');

// const upload = multer({ storage });
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.post('/', projectController.createProject);

router
  .route('/id')
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

//router.post('/update/:id', upload.array('image'),upload.single('image'),
//upload.array('images'), projectController.saveImages);

module.exports = router;
