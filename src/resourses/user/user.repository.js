const BaseRepository = require("../base.repository");

class UserRepository extends BaseRepository{
    constructor(){
        super("User");
        this.include = {
            Finances: true
        }
    }

    async findOne(where){
        return super.findOne(where,this.include);
    }

}

module.exports = UserRepository