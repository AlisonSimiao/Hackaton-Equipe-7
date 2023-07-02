const { NotFoundError, ConflictError } = require("../../error");
const { DebtCreateDto } = require("./debt.dto");
const DebtRepository = require("./debt.repository");

class DebtService {
    constructor(){
        this.usuario = usuario;
        this.debtRepository = new DebtRepository()
    }

    async validateParams(idFinance){
        const finance = await this.financeRepository.findOne({id: idFinance})

        if(!finance) 
            throw new NotFoundError("Financeiro não encontrado")
        return finance
    }

    async create(body){
        const debt = new DebtCreateDto(
            body.description,
            body.value,
            body.dueDate,
            body.status,
            this.usuario.financeId
        )
        
        return await this.debtRepository.create(debt)
    }

    async update(id, body){
        const debt = await this.debtRepository.findOne({id})

        if(!debt) 
            throw new NotFoundError("Divida não encontrada")

        return await this.debtRepository.update(id, body)
    }

    async findOne(id){
        const debt = await this.debtRepository.findOne({id})

        if(!debt) 
        throw new NotFoundError("Divida não encontrada")

        return debt
    }
}

module.exports = DebtService;