const userService = require("../services/userService");
const argon2 = require("argon2");


async function registerUser(req, res) {
    const {name, email, password} = req.body;

    try {
        const user = await userService.createUser(name, email, password);
        res.status(201).json({
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

async function login(req, res) {
    const {email, password} = req.body;

    try {
        const user = await userService.getUserByEmail(email);
        if (!user || !(await argon2.verify(user.password, password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    registerUser,
    login
}