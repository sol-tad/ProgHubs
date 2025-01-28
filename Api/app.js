const express = require("express");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
