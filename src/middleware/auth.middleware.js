const { Prisma } = require("@prisma/client")
const jwt = require("jsonwebtoken")
const { ErrorResponse } = require("../response/index.response")
const UserRepository = require("../resourses/user/user.repository")
const { ForbidenError } = require("../error")

async function auth(req, res, next) {
    
    const userRepository = new UserRepository()
    
    try{
        const {
            id
        } = jwt.verify(req.headers.authorization?.split(' ')[1] || "", process.env.JWT_SECRET)

        const user = await userRepository.findOne({id})

        if(!user)
            throw new ForbidenError("Não autorizado")

        req.usuario = user

        next()
    }
    catch(err){
        if(err.name === 'JsonWebTokenError')
            return ErrorResponse({
                message: 'Token expirado',
                statusCode: 401
            }, res)

        ErrorResponse(err, res)
    }
}

module.exports = auth