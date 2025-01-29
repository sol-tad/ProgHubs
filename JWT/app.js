const express = require("express");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the authentication routes
app.use("/auth", authRoutes);

// Use the user routes (protected)
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
