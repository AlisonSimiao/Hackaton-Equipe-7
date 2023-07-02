const { validationResult } = require('express-validator');

const Validate = validations => {
    return async (req, res, next) => {
        const errors = []

      for (let validation of validations) {
        const result = await validation.run(req);
        if (result.errors.length) 
          errors.push(...result.errors.map(err => err.msg));
      }

      if (!errors.length) {
        return next();
      }

      res.status(422).json({ messages: errors });
    }
  };

module.exports = {
    Validate,
    UserValidator: require('./user.validator.js'),
    LoginValidator: require('./login.validator'),
};