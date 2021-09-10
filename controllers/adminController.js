const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Project = require('../models/projectModel');
const getWhatILearned = require('../utils/getWhatILearned');

exports.renderAdminIndex = catchAsync(async (req, res) => {
  const projects = await Project.find().sort('-dateFirstCompleted');

  res.render('adminIndex', { title: 'Admin Start', projects });
});

exports.renderCreate = catchAsync(async (req, res) => {
  res.render('create', { title: 'Add New Project' });
});

exports.renderUpdate = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new AppError('No project found with that ID', 404));
  }

  res.render('update', {
    title: 'Update Project',
    project,
    whatILearned: getWhatILearned(project),
  });
});

exports.deleteProjectAndReload = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError('No document found with that ID', 404));
  }

  const projects = await Project.find().sort('-dateFirstCompleted');

  res.render('adminIndex', { title: 'Admin Start', projects });
});

exports.renderEditImages = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new AppError('No project found with that ID', 404));
  }

  res.render('editImages', { title: 'Edit Project Images', project });
});
