const { NotFoundError } = require("../../error");
const PointRepository = require("./point.repository");

class PointService {
    constructor(usuario){
        this.usuario = usuario;
        this.pointRepository = new PointRepository()
    }

    async update(points){
        return await this.pointRepository.update({id: this.usuario.pointsId},{value: points})
    }

    async findOne(){
        return await this.pointRepository.findOne({id: this.usuario.pointsId})
    }

}

module.exports = PointService;