const { ConflictError } = require("../../error");
const { UserCreateDto } = require("./user.dto");
const bcrypt   =require('bcryptjs');
const UserRepository = require("./user.repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    async findOne(id) {
        return await this.userRepository.findUser(id);
    }

    async create(body) {
        const user = await this.userRepository.findOne({ email: body.email });

        if (user)
            throw new ConflictError(`Usuario com email '${body.email}' já existe`);

        const newPassword = await this.encriptarSenha(body.password, "10");
        const userCreateDto = new UserCreateDto(
            body.email,
            body.name,
            newPassword,
            body.adress,
            body.idGender,
            body.age
        )

        await this.userRepository.create(userCreateDto);

        return { message: "usuario criado com sucesso" }
    }

    buildResponse(user) {
        new UserCreateDto(
            user.email,
            user.name,
            user.password,
            user.adress,
            user.idGender
        )

    }

    async encriptarSenha(senha) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(senha, salt);
        return hash;
    }

    async updateUser(id, user) {
        return await this.userRepository.updateUser(id, user);
    }

    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }

}
module.exports = UserService;