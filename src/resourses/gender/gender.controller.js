const { Paginate, ErrorResponse } = require("../../response/index.response")
const { formatPage } = require("../../utils/formatPage")
const GenderService = require("./gender.service")

class GenderController {

    async paginate({ query }, res){
        try{
            const page = formatPage(query)
            const genderService = new GenderService()
            const { genders, count } = await genderService.paginate(page)

            Paginate(count, genders, page, res)
        }
        catch(e){
            ErrorResponse(e, res)
        }
    }
}


module.exports = GenderController