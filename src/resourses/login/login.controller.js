const { Create, ErrorResponse } = require("../../response/index.response")
const LoginService = require("./login.service")

class LoginController{
    async create({body}, res){
        try{
            const loginService = new LoginService()
            const user = await loginService.create(body)
            Create(user, res)
        }
        catch(e){
            ErrorResponse(e, res)
        }
    }
}

module.exports  = LoginController