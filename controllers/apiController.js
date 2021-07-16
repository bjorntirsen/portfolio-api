const Project = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');

exports.createProject = catchAsync(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: project,
    },
  });
});
