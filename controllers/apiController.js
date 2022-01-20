const Project = require('../models/projectModel');
const Presentation = require('../models/presentationModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const test_data = require('../test-data/sitemap_homepage.json')

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

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

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

exports.getPresentation = catchAsync(async (req, res, next) => {
  const presentation = await Presentation.findById(
    '6124a70233f1b261d16eb2ca'
  ).select('presentation -_id');

  if (!presentation) {
    return next(new AppError('No presentation found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: presentation,
    },
  });
});

exports.getTestData = catchAsync(async (req, res, next) => {
  const testData = test_data;

  if (!testData) {
    return next(new AppError('No test data found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: testData,
    },
  });
});
