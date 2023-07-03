const { NotFoundError, ConflictError } = require("../../error");
const { DebtCreateDto, DebtUpdateDto } = require("./debt.dto");
const DebtRepository = require("./debt.repository");

class DebtService {
    constructor(usuario) {
        this.usuario = usuario;
        this.debtRepository = new DebtRepository()
    }

    async validateParams(idFinance) {
        const finance = await this.financeRepository.findOne({ id: idFinance })

        if (!finance)
            throw new NotFoundError("Financeiro não encontrado")
        return finance
    }

    async delete(id){
        await this.validateParams(id)

        return await this.debtRepository.delete({id})
    }
    
    async create(body) {

        const debt = new DebtCreateDto(
            body.description,
            body.value,
            new Date(body.dueDate),
            body.status,
            this.usuario.financesId
        )

        return await this.debtRepository.create(debt)
    }

    async validateParams(id) {
        const debt = await this.debtRepository.findOne({ id })

        if (!debt)
            throw new NotFoundError("Divida não encontrada")
        
        return debt
    }

    async update(id, body) {
        const {
        dueDate
        }  = await this.validateParams(id)

        const debt = new DebtUpdateDto(
            body.description,
            body.value,
            new Date(body.dueDate || dueDate),
            body.status,
            this.usuario.financesId
        )
        
        return await this.debtRepository.update({id}, debt)
    }

    async findOne(id) {
        const debt = await this.validateParams(id)

        return debt
    }
}

module.exports = DebtService;