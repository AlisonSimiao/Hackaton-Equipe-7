const { ErrorResponse, Update, FindOne } = require("../../response/index.response");
const PointService = require("./point.service");

class PointController {

    async findOne({usuario}, res) {
        try {
            const pointService = new PointService(usuario)
            const newPoint = await pointService.findOne()
            
            FindOne(newPoint, res)
        } catch (error) {
            ErrorResponse(error, res)
        }
    }

    async update({params: { points }, usuario}, res) {
        try {
            const pointService = new PointService(usuario)
            const newPoint = await pointService.update(Number(points))
            
            Update(newPoint, res)
        } catch (error) {
            console.log(error);
            ErrorResponse(error, res)
        }
    }
}

module.exports = PointController;