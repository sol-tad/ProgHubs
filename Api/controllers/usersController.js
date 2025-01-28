const users = require("../data/users");

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const addUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    users.splice(userIndex, 1);
    res
      .status(200)
      .json({ message: `User with ID ${userId} deleted successfully` });
  }
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
};
