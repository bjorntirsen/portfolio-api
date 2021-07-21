const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Project = require('../models/projectModel');

exports.renderIndex = catchAsync(async (req, res) => {
  res.render('index', { title: 'Landing Page' });
});

exports.renderList = catchAsync(async (req, res) => {
  const projects = await Project.find().sort('-dateFirstCompleted');

  res.render('list', { title: 'All Projects', projects });
});

exports.renderProjectDetails = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new AppError('No project found with that ID', 404));
  }

  res.render('project', { title: `${project.name} Project`, project });
});

exports.renderLogin = catchAsync(async (req, res) => {
  res.render('login', { title: 'Log In' });
});
