class LoginController{
    create({body}, res){
        try{
            const loginService = new LoginService()
            const user = loginService.create(body)
            return res.status(200).json(user)
        }
        catch(e){

        }
    }
}

module.exports  = LoginController