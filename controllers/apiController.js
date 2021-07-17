const Project = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.createProject = catchAsync(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: project,
    },
  });
});

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const filter = {};
  const features = new APIFeatures(Project.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  // const doc = await features.query.explain();
  const projects = await features.query;

  res.status(201).json({
    status: 'success',
    results: projects.length,
    data: {
      data: projects,
    },
  });
});
