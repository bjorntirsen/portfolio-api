const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Project = require('../models/projectModel');

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

  const whatILearned = {
    icons1: project.whatILearned[0]
      ? project.whatILearned[0].icons.join(', ')
      : '',
    para1: project.whatILearned[0] ? project.whatILearned[0].paragraph : '',
    icons2: project.whatILearned[1]
      ? project.whatILearned[1].icons.join(', ')
      : '',
    para2: project.whatILearned[1] ? project.whatILearned[1].paragraph : '',
    icons3: project.whatILearned[2]
      ? project.whatILearned[2].icons.join(', ')
      : '',
    para3: project.whatILearned[2] ? project.whatILearned[2].paragraph : '',
    icons4: project.whatILearned[3]
      ? project.whatILearned[3].icons.join(', ')
      : '',
    para4: project.whatILearned[3] ? project.whatILearned[3].paragraph : '',
  };

  console.log(whatILearned);

  res.render('update', { title: 'Update Project', project, whatILearned });
});

exports.renderEditImages = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new AppError('No project found with that ID', 404));
  }

  res.render('editImages', { title: 'Edit Project Images', project });
});
