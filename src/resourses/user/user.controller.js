const { Create, ErrorResponse } = require("../../response/index.response")
const UserService = require("./user.service")

class UserController{
    async create({ body }, res) {
        try {
            const userService = new UserService()
            const user = await userService.create(body)

            Create(user, res)
        }
        catch (err) {
            console.error(err)
            ErrorResponse(err, res)
        }
    }
}

module.exports = UserController