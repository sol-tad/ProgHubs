const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }

    // Get the uploaded image URL from Cloudinary
    const imageUrl = req.file.path;

    res.status(200).json({
      success: true,
      imageUrl: imageUrl,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = { uploadImage };
