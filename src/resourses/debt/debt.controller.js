const { NotFoundError } = require("../../error");
const { ErrorResponse, Update, FindOne, Create } = require("../../response/index.response");
const DebtRepository = require("./debt.repository");
const DebtService = require("./debt.service");

class DebtController {

    async delete({ params: {id}, usuario } , res) {
        try {
            const debtService = new DebtService(usuario)
            const newDebt = await debtService.delete(id)
            
            Delete(newDebt, res)
        } catch (error) {
            ErrorResponse(error, res)
        }
    }
    async create({ body, usuario} , res) {
        
        try {
            const debtService = new DebtService(usuario)
            const newDebt = await debtService.create(body)
            
            Create(newDebt, res)
        } catch (error) {
            ErrorResponse(error, res)
        }
    }

    
    async paginate({usuario}, res) {
        try {
            const debtService = new DebtService(usuario)
            const newDebt = await debtService.paginate()
            
            Paginate(newDebt, res)
        } catch (error) {
            ErrorResponse(error, res)
        }
    }

    async findOne({params: {id}}, res) {
        try {
            const debtService = new DebtService()
            const newDebt = await debtService.findOne(id)
            
            FindOne(newDebt, res)
        } catch (error) {
            ErrorResponse(error, res)
        }
    }

    async update({params: { id },usuario, body}, res) {
        try {
            
            const debtService = new DebtService(usuario)
            const newDebt = await debtService.update(id, body)
            
            Update(newDebt, res)
        } catch (error) {
            console.log(error);
            ErrorResponse(error, res)
        }
    }
}

module.exports = DebtController;