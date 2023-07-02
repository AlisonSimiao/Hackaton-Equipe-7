const { body } = require("express-validator");

exports.create = [
    body('email')
    .isEmail().withMessage('Invalid email'),

    body('password')
    .isLength({ min: 5 }).withMessage('A senha deve conter pelo menos 5 caracteres')
    .matches(/\d/).withMessage('Asenha deve conter pelo menos um número'),
]