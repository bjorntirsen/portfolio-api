const catchAsync = require('../utils/catchAsync');
//const AppError = require('../utils/appError');
const Project = require('../models/projectModel');

exports.renderIndex = catchAsync(async (req, res) => {
  const projects = await Project.find();
  res.render('index', { title: 'Hello World!', projects });
});
