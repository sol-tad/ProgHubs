const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Optional: Folder in Cloudinary
    format: async (req, file) => "png", // Optional: Convert to PNG
    public_id: (req, file) => `image_${Date.now()}`, // Unique public ID
  },
});

const upload = multer({ storage });

module.exports = upload;
