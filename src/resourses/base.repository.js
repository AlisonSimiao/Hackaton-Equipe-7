const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class BaseRepository{
    constructor(modelName){
        this.model = prisma[modelName];
    }

    async findOne(where, include){
        return await this.model.findFirst({where, include});
    }

    async paginate(where, {page, limit}){
        return await Promise.all([
            this.model.findMany({
            where,
            skip: (page - 1) * limit,
            take: limit,
          }),

          this.model.count()
        ])
    }

    async create(data){
        const newModel = await this.model.create({data});
        return newModel;
    }

    async update(where, data){
        return await this.model.update({where, data});
    }

    async delete(where){
        return await this.model.delete({where});
    }
}


module.exports = BaseRepository