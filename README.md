# Hackaton-Equipe-7

# Endpoints

## Login

POST /login

``` javascript
    {
        email: string
        password: string
    }
```
##Cadastro

POST /signup

``` javascript
{
    email    : String
    name     : String
    password : String
    adress   : String
    idGender : 1, 2, 3,
    age: number
}
```

> idGender => 1 - masculino, 2 - feminino e 3 - outros

GET /genders

```
    {
	"total": number,
	"genders":  string[],
	"page": number,
	"limit": number
}
```
> total = total de registros
> genders = arrays com os nomes de cada genero
> page = pagina atual `pode ser alterado enviando query com mesmo nome`
> limit = numero maximo de registros por pagina `pode ser alterado enviando query com mesmo nome`