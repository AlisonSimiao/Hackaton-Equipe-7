class DebtCreateDto {
    constructor(
        description,
        Value,
        dueDate,
        status,
        financeId
    ) {
        this.description = description
        this.Value = Value
        this.dueDate = dueDate
        this.StatusDebts = { connect : {id: status} }
        this.finance = { connect : {id: financeId} }
    }
}

module.exports = {
    DebtCreateDto
}