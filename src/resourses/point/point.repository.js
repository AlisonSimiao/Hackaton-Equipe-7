const BaseRepository = require("../base.repository");

class PointRepository extends BaseRepository{
    constructor(){
        super("Points");
    }
    
}

module.exports = PointRepository;