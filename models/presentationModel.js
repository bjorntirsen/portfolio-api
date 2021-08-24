const mongoose = require('mongoose');

const presentationSchema = new mongoose.Schema({
  presentation: [String],
});

presentationSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

const Presentaion = mongoose.model('Presentaion', presentationSchema);

module.exports = Presentaion;
