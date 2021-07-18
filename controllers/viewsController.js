const catchAsync = require('../utils/catchAsync');
//const AppError = require('../utils/appError');
const Project = require('../models/projectModel');

exports.renderIndex = catchAsync(async (req, res) => {
  res.render('index', { title: 'Landing Page' });
});

exports.renderList = catchAsync(async (req, res) => {
  const projects = await Project.find().sort('-dateFirstCompleted');
  res.render('list', { title: 'All Projects', projects });
});

exports.renderLogin = catchAsync(async (req, res) => {
  res.render('login', { title: 'Log In' });
});

exports.renderAdmin = catchAsync(async (req, res) => {
  res.render('admin', { title: 'Admin' });
});
