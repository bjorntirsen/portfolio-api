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
  siteLink: {
    type: String,
    trim: true,
  },
  techniquesUsed: {
    type: String,
    trim: true,
  },
  githubRepo: {
    type: String,
    trim: true,
  },
  slug: String,
  imageCoverUrl: {
    type: String,
    default:
      'https://res.cloudinary.com/bjorntirsen/image/upload/v1626975858/new-folder/project-60f9ae56f15f647b3e73beb3-1626975857278.png',
  },
  imageCoverFilename: String,
  images: [{ url: String, filename: String }],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

projectSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
projectSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

const project = mongoose.model('project', projectSchema);

module.exports = project;
