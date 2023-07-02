const BaseRepository = require("../base.repository");

class FinanceRepository extends BaseRepository{
    constructor(){
        super('Finances')
    }

    
}

module.exports = FinanceRepository