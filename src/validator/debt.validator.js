const { body } = require("express-validator");
const constants = require("../config/constants");

exports.create = [
    body('description')
        .exists().withMessage("descrição é obrigatoria")
        .isLength({ max: 150 }).withMessage("descrição deve ter no maximo 150 caracteres"),
    body('value')
        .exists().withMessage("valor é obrigatorio")
        .isDecimal().withMessage("valor deve ser decimal"),
    body('dueDate')
        .exists().withMessage("Data de vencimento é obrigatorio")
        .isDate({ format: "DD/MM/YYYY" }).withMessage("Data de vencimento deve ser valida"),
    body('status')
        .exists().withMessage("statusé obrigatorio")
        .isIn(Object.values(constants.STATUS.DEBT))
        .withMessage("status possiveis " + Object.values(constants.STATUS.DEBT))
]

exports.update = [

    body('description')
        .optional()
        .exists().withMessage("descrição é obrigatoria")
        .isLength({ max: 150 }).withMessage("descrição deve ter no maximo 150 caracteres"),

    body('value')
        .optional()
        .exists().withMessage("valor é obrigatorio")
        .isDecimal().withMessage("valor deve ser decimal"),

    body('dueDate')
        .optional()
        .exists().withMessage("Data de vencimento é obrigatorio")
        .isDate({ format: "DD/MM/YYYY" }).withMessage("Data de vencimento deve ser valida"),

    body('status')
        .optional()
        .exists().withMessage("statusé obrigatorio")
        .isIn(Object.values(constants.STATUS.DEBT))
        .withMessage("status possiveis " + Object.values(constants.STATUS.DEBT))
]