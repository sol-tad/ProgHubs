const express = require("express");
const app = express();
const uploadRoutes = require("./routes/uploadRoutes");

// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve static files from the "public" folder

// Routes
app.use("/", uploadRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
