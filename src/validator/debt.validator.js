const  { body, isDate } = require("express-validator");
const constants = require("../config/constants");

exports.create = [
    body('description')
        .exists().withMessage("descrição é obrigatoria")
        .isLength({ max: 150 }).withMessage("descrição deve ter no maximo 150 caracteres"),
    body('Value')
        .exists().withMessage("valor é obrigatorio")
        .isDecimal().withMessage("valor deve ser decimal"),
    body('dueDate')
        .exists().withMessage("Data de vencimento é obrigatorio")
        .custom(value => {
            if (!isDate(value)) {
              throw new Error('"Data de vencimento deve ser uma data"');
            }
            return true;
          }),
    body('status')
        .exists().withMessage("statusé obrigatorio")
        .isIn(Object.values(constants.STATUS.DEBT))
        .withMessage("status possiveis "  )
]