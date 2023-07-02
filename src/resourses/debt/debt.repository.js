const BaseRepository = require("../base.repository");

class DebtRepository extends BaseRepository{
    constructor(){
        super("Debts");
    }
    
}

module.exports = DebtRepository;