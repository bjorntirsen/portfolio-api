/* eslint-disable node/no-unsupported-features/es-syntax */
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Project = require('../models/projectModel');

exports.createProject = catchAsync(async (req, res, next) => {
  let projectData = req.body;
  let images = [];

  if (req.files) {
    images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));
    projectData = {
      ...projectData,
      images,
    };
  }

  if (req.file) {
    projectData = {
      ...projectData,
      imageCoverUrl: req.file.path,
      imageCoverFilename: req.file.filename,
    };
  }

  console.log(projectData);
  //const project = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: projectData,
    },
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
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

// upload.array('image'), (req, res) => {
//   console.log(req.body, req.files);
//   res.send('it worked');
// }

exports.saveImages = catchAsync(async (req, res, next) => {
  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  const project = await Project.findByIdAndUpdate(req.params.id, images, {
    new: true,
    runValidators: true,
  });

  console.log(images);

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

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
