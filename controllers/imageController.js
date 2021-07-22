const multer = require('multer');

const catchAsync = require('../utils/catchAsync');
const Project = require('../models/projectModel');
const AppError = require('../utils/appError');
const { storage } = require('./cloudinary');

const parser = multer({ storage });

exports.uploadSingle = parser.single('image');

exports.afterUpload = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = {
    imageCoverUrl: req.file.path,
    imageCoverFilename: req.file.filename,
  };
  console.log(req.file);
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

exports.uploadCoverImage = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  upload.single('image');
  console.log(req.body);
  console.log(req.file);
  res.redirect(`/admin/images/${id}`);
});

exports.saveCoverImage = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  const result = await cloudinary.uploader.upload(req.file.path, {
    public_id: `project${req.params.id}`,
    width: 500,
    height: 500,
    crop: 'fill',
  });

  console.log(result);

  next();
});
