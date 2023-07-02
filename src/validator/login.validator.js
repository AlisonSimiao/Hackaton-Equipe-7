const { body } = require("express-validator");

exports.create = [
    body('email')
    .exists().withMessage('Email é obrigatório')
    .isEmail().withMessage('Email invalido'),

    body('password')
    .exists().withMessage('Senha é obrigatória')
]