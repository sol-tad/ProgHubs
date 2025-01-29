const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { uploadImage } = require("../controllers/uploadController");

// Upload image route
router.post("/upload-image", upload.single("image"), uploadImage);

module.exports = router;
