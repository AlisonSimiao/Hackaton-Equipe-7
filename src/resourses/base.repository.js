const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class BaseRepository{
    constructor(modelName){
        this.model = prisma[modelName];
    }

    async findOne(where, include){
        return await this.model.findById({where, include});
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
        const newModel = new this.model.create({data});
        return await newModel.save();
    }

    async update(id, data){
        return await this.model.findByIdAndUpdate(id, data, {new: true});
    }

    async delete(id){
        return await this.model.findByIdAndDelete(id);
    }
}


module.exports = BaseRepository