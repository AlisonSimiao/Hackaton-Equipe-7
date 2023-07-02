function Paginate(count, data, {page, limit}, res){
    res.status(200).json({
        total: count,
        data,
        page,
        limit,
    })
}

function Create(data, res){
    return res.status(201).json(data)
}

function FindOne(data, res) {
    return res.status(200).json(data)
}

function Update(data, res) {
    return res.status(200).json(data)
}

function Delete(res) {
    return res.status(204)
}

function ErrorResponse(error, res) { 
    console.error(error)
    
    error.statusCode 
    ? res.status(error.statusCode).json({message: error.message}) 
    : res.status(500).json({message: 'Erro interno'})
} 
    

module.exports = {
    Paginate,
    Create,
    Delete,
    FindOne,
    Update,
    ErrorResponse,
}