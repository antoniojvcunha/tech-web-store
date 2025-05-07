const router = require("express").Router();
const userController = require("../controllers/userController");
const { validateRegister, validateLogin } = require("../middlewares/authValidation");


router.post("/api/users/register", validateRegister , userController.registerUser);
router.post("/api/users/login", validateLogin , userController.login);  

module.exports = router;