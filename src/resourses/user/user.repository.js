const BaseRepository = require("../base.repository");

class UserRepository extends BaseRepository{
    constructor(){
        super("User");
    }

}

module.exports = UserRepository