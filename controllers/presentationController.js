/* eslint-disable node/no-unsupported-features/es-syntax */
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Presentation = require('../models/presentationModel');

exports.renderPresentation = catchAsync(async (req, res, next) => {
  const presentation = await Presentation.findOne({});

  if (!presentation) {
    return next(new AppError('No project found with that ID', 404));
  }

  res.render('presentation', {
    title: 'Edit Presentation',
    presentation,
  });
});

exports.updatePresentation = catchAsync(async (req, res, next) => {
  const presentation = await Presentation.findByIdAndUpdate(
    '6124a70233f1b261d16eb2ca',
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!presentation) {
    return next(new AppError('No Presentation found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: presentation,
    },
  });
});
