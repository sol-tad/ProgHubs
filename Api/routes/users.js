const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// GET /users - Retrieve all users
router.get("/", usersController.getUsers);

// POST /users - Add a new user
router.post("/", usersController.addUser);

// DELETE /users/:id - Delete a user by ID
router.delete("/:id", usersController.deleteUser);

module.exports = router;
