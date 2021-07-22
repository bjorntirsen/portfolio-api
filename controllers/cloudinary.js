const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'new-folder',
    format: async (req, file) => 'png', // supports promises as well
    width: 500,
    height: 500,
    crop: 'fill',
    public_id: (req, file) => {
      console.log(file);
      const customName = `project-${req.params.id}-${Date.now()}`;
      return customName;
    },
  },
});

module.exports = {
  cloudinary,
  storage,
};
