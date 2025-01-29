const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /auth/register - Register a new user
router.post("/register", authController.register);

// POST /auth/login - Authenticate a user and issue a JWT
router.post("/login", authController.login);

module.exports = router;
