const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/api/users/register", userController.registerUser);
router.post("/api/users/login", userController.login);  

module.exports = router;