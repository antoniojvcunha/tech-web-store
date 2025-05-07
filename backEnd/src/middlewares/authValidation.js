const validator = require('validator');
const { passwordRequirements } = require('../utils/validationRules');

function validateRegister(req, res, next) {
  const { name, email, password } = req.body;
  const errors = {};

  // Validação do nome
  if (!name || name.trim().length < 3) {
    errors.name = 'Name must have at least 3 characters';
  }

  // Validação do email
  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email';
  }

  // Validação da senha
  if (!password || password.length < 8) {
    errors.password = 'Password must have at least 8 characters';
  } else if (!validator.isStrongPassword(password, passwordRequirements)) {
    errors.password = 'Weak password. Must have at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  const errors = {};

  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

module.exports = {
  validateRegister,
  validateLogin
};