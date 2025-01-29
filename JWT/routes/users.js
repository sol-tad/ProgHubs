const express = require("express");
const usersController = require("../controllers/usersController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authenticateToken);

router.get("/", usersController.getUsers);

router.post("/", usersController.addUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;
