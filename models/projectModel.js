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
      'A project title must have less or equal than 40 characters',
    ],
    minlength: [5, 'A project title must have more or equal than 5 characters'],
  },
  subtitle: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dateFirstCompleted: {
    type: Date,
    required: [true, 'A project must have a date when it was first completed!'],
  },
  image: {
    type: String,
    default: 'default.jpg',
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
  this.slug = slugify(this.title, { lower: true });
  next();
});

const project = mongoose.model('project', projectSchema);

module.exports = project;
