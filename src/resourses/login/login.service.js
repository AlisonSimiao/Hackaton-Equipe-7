const UserRepository = require('../user/user.repository');
const { NotFoundError } = require('../../error');
const bcrypt   =require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginService {
    constructor() {
        this.userRepository = new UserRepository()
    }
    async create(body) {
        const { email, password } = body;

        const user = await this.userRepository.findOne({ email })

        if (!user)
            throw new NotFoundError("Senha Ou email incorretos")

        const validatePass = await this.verificarSenha(password, user.password)

        if (!validatePass)
            throw new NotFoundError("Senha Ou email incorretos")

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400,

        })
        
        delete user.password
        delete user.id

        return {
            token,
            user
        }

    }


    async verificarSenha(senha, hash) {
        const isMatch = await bcrypt.compare(senha, hash);
        return isMatch;
    }
}

module.exports = LoginService