class UserCreateDto {
    constructor(
        email,
        name,
        password,
        adress,
        idGender,
        age,
        ponitsId,
        financesId
    ) {
        this.email = email
        this.name = name
        this.password = password
        this.adress = adress
        this.gender = {connect: {id: idGender}}
        this.age = age
        this.Points = {connect: {id: ponitsId}}
        this.Finances = {connect: {id: financesId}}
        
    }
}

class UserResponseDto {
    constructor(
        email,
        name,
        adress,
        gender,
    ) {
        this.email = email
        this.name = name
        this.adress = adress
        this.gender = gender
    }
}


module.exports = {
    UserCreateDto,
    UserResponseDto
}