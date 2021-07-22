const multer = require('multer');

const catchAsync = require('../utils/catchAsync');
const Project = require('../models/projectModel');
const AppError = require('../utils/appError');
const { storage } = require('./cloudinary');

const parser = multer({ storage });

exports.uploadSingle = parser.single('image');

exports.afterUpload = catchAsync(async (req, res, next) => {
  const data = {
    imageCoverUrl: req.file.path,
    imageCoverFilename: req.file.filename,
  };
  const project = await Project.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    return next(new AppError('No project found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: project,
    },
  });
});
