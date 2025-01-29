const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authUsers = require("../data/authUsers");

const register = (req, res) => {
    const { name, email, password } = req.body;

    const userExists = authUsers.find((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
        id: authUsers.length + 1,
        name,
        email,
        password: hashedPassword,
    };
    authUsers.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
};

const login = (req, res) => {
    const { email, password } = req.body;

    const user = authUsers.find((user) => user.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        "your-secret-key",
        {
            expiresIn: "1h",
        }
    );

    res.status(200).json({ token });
};

module.exports = {
    register,
    login,
};
