const { body } = require("express-validator");
const constants = require("../config/constants");

exports.create = [
    body('email')
        .exists().withMessage('Email é obrigatório')
        .isEmail().withMessage('Email invalido'),

    body('password')
        .exists().withMessage('Senha é obrigatória')
        .isLength({ min: 5 }).withMessage('Senha deve conter pelo menos 5 caracteres')
        .matches(/\d/).withMessage('Senha deve conter pelo menos um número'),
    body('name')
        .exists().withMessage('Nome é obrigatório')
        .isLength({ max: 150 }).withMessage('Nome deve conter no maximo 150 caracteres'),

    body('adress')
        .exists().withMessage('endereco é obrigatorio')
        .isLength({ max: 150 }).withMessage('Nome deve conter no maximo 150 caracteres'),
    
        body('age')
        .exists().withMessage('Idade é obrigatorio')
        .isNumeric().withMessage('Idade deve ser um numero'),

    body('idGender')
        .exists().withMessage('Genero é obrigatorio')
        .isIn(Object.values(constants.GENDER)).withMessage('valores suportados: ' + Object.values(constants.GENDER)),
]