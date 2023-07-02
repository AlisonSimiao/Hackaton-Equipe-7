const { Prisma } = require("@prisma/client")
const jwt = require("jsonwebtoken")
const { ErrorResponse } = require("../response/index.response")
const UserRepository = require("../resourses/user/user.repository")

async function auth(req, res, next) {
    
    const userRepository = new UserRepository()
    
    try{
        const {
            id
        } = jwt.verify(req.headers.authorization?.split(' ')[1] || "", process.env.JWT_SECRET)

        const user = await userRepository.findOne({id})
        
        req.usuario = user

        next()
    }
    catch(err){
        console.error(err)
        if(err.name === 'JsonWebTokenError')
            return ErrorResponse({
                message: 'Token expirado',
                statusCode: 401
            }, res)

        ErrorResponse(err, res)
    }
}

module.exports = auth