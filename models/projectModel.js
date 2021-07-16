const mongoose = require('mongoose');
const slugify = require('slugify');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project must have a title'],
    unique: true,
    trim: true,
    maxlength: [
      40,
      'A project title must have less or equal then 40 characters',
    ],
    minlength: [
      10,
      'A project title must have more or equal then 10 characters',
    ],
  },
  subtitle: {
    type: String,
    trim: true,
    maxlength: [
      40,
      'A project subtitle must have less or equal then 40 characters',
    ],
    minlength: [
      10,
      'A project subtitle must have more or equal then 10 characters',
    ],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [
      40,
      'A project description must have less or equal then 40 characters',
    ],
    minlength: [
      10,
      'A project description must have more or equal then 10 characters',
    ],
  },
  dateFirstCompleted: {
    type: Date,
    required: [true, 'A project must have a date when it was first completed!'],
  },
  imageCover: {
    type: String,
    required: [true, 'A project must have a cover image'],
  },
  siteLink: {
    type: String,
    trim: true,
  },
  techniquesUsed: {
    type: String,
    trim: true,
  },
  GithubRepo: {
    type: String,
    trim: true,
  },
  slug: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

projectSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
projectSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const project = mongoose.model('project', projectSchema);

module.exports = project;
