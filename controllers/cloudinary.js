const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const coverImageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'bjorns-portfolio',
    format: async () => 'jpeg',
    width: 1125,
    height: 750,
    crop: 'fill',
    gravity: 'north',
    quality: 90,
    public_id: (req) => {
      const customName = `project-${req.params.id}-${Date.now()}`;
      return customName;
    },
  },
});

const imagesStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'bjorns-portfolio-images',
    format: async () => 'jpeg',
    width: 1920,
    height: 1080,
    crop: 'fill',
    quality: 90,
    public_id: (req) => {
      const customName = `project-${req.params.id}-${Date.now()}`;
      return customName;
    },
  },
});

module.exports = {
  cloudinary,
  coverImageStorage,
  imagesStorage,
};
