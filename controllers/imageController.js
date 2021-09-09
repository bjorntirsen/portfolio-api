const multer = require('multer');

const catchAsync = require('../utils/catchAsync');
const Project = require('../models/projectModel');
const AppError = require('../utils/appError');
const { coverImageStorage, imagesStorage } = require('./cloudinary');

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please only upload images.', 400), false);
  }
};

const coverImageParser = multer({ storage: coverImageStorage });
const imagesParser = multer({
  storage: imagesStorage,
  fileFilter: multerFilter,
});

exports.uploadSingle = coverImageParser.single('image');

exports.afterSingleUpload = catchAsync(async (req, res, next) => {
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

exports.uploadMultiple = imagesParser.array('images', 5);

exports.afterMultipleUpload = catchAsync(async (req, res, next) => {
  const images = [];
  req.files.forEach((image) => {
    images.push(image.path);
  });
  const data = { images };
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
