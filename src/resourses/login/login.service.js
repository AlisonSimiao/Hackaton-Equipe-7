const crypto = require('crypto');
import * as res from 'express/lib/response';

class LoginService{
    create(body){
        const {email, password} = body;
        const user = req.usuario

        if(email !== user.email){
            return res.status(401).json({message: "Senha Ou email incorretos"})
        }

        const validatePass = verificarSenha(password, user.password)

        if(!validatePass){
            return res.status(401).json({ message: "Senha Ou email incorretos"})
        }
    }

    verificarSenha(senha, senhaEncriptada, salt) {
        const hash = crypto.pbkdf2Sync(senha, salt, 10000, 64, 'sha512').toString('hex');
        return senhaEncriptada === hash;
      }
}

module.exports = LoginService