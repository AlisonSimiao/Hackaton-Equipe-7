const { ConflictError } = require("../../error");
const { UserCreateDto } = require("./user.dto");
const bcrypt   =require('bcryptjs');
const UserRepository = require("./user.repository");
const PointRepository = require("../point/point.repository");
const FinanceRepository = require("../finance/finance.repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository()
        this.pointsRepository = new PointRepository()
        this.financeRepository = new FinanceRepository()
    }

    async findOne(id) {
        return await this.userRepository.findUser(id);
    }

    async create(body) {
        const user = await this.userRepository.findOne({ email: body.email });

        if (user)
            throw new ConflictError(`Usuario com email '${body.email}' já existe`);

        const newPassword = await this.encriptarSenha(body.password, "10");
        const { id: idPoints } = await this.pointsRepository.create({value: body.points || 0})
        const {id: financesId } = await this.financeRepository.create({}) 

        const userCreateDto = new UserCreateDto(
            body.email,
            body.name,
            newPassword,
            body.adress,
            body.idGender,
            body.age,
            idPoints,
            financesId
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
            user.idGender,
            user.points
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