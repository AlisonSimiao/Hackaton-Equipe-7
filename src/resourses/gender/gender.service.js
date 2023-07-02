const { NotFoundError } = require("../../error");
const { genderResponseDto } = require("./gender.dto");
const GenderRepository = require("./gender.repository");

class GenderService{
    constructor(){
        this.genderRepository = new GenderRepository();
    }
    /**
     * 
     * @param { {limit, page} } page 
     * @returns 
     */
    async paginate(page){
        const [rows, count] = await this.genderRepository.paginate({}, page)

        if(!rows.length)
            throw new NotFoundError("Nenhum dado encontrado")
        
        return {
            count,
            genders: rows.map(this.buildResponse),
        }
    }

    buildResponse(gender){
        return new genderResponseDto(gender.name)
    }
}

module.exports = GenderService