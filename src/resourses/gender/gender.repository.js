const BaseRepository = require("../base.repository");

class GenderRepository extends BaseRepository{
    constructor(){
        super("Gender")
    }
}

module.exports = GenderRepository