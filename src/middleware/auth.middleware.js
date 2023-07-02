const { Prisma } = require("@prisma/client")
const jwt = require("jsonwebtoken")

module.exports = async function (req, res, next) {
    

    try{
        const {
            id
        } = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET)

        const user = await Prisma.User.findOne({
            where: {
                id
            }
        })
        
        req.usuario = user

        next()
    }
    catch(err){
        if(err.name === "TokenExpiredError")
            return res.status(403).json({
                message: "Não autorizado"
            })

        res.status(500).json({
                message: "Erro no servidor"
            })
    }
}