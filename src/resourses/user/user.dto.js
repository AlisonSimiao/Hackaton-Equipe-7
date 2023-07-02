class UserCreateDto {
    constructor(
        email,
        name,
        password,
        adress,
        idGender,
        age
    ) {
        this.email = email
        this.name = name
        this.password = password
        this.adress = adress
        this.gender = {connect: {id: idGender}}
        this.age = age
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