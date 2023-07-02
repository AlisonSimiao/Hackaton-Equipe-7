const { formatPage } = require("../../utils/formatPage")
const GenderService = require("./gender.service")

class GenderController {

    async paginate({ query }, res){
        try{
            const page = formatPage(query)
            const genderService = new GenderService()
            const { genders, count } = await genderService.paginate(page)

            return res.status(200).json({
                total: count,
                genders,
                page: page.page,
                limit: page.limit,
            })
        }
        catch(e){
            
            return res.status(500).json(e)
        }
    }
}


module.exports = GenderController