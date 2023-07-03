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

class DebtUpdateDto {
    constructor(
        description,
        Value,
        dueDate,
        status,
        financeId
    ) {
        description && (this.description = description)
        Value && (this.Value = Value)
        dueDate && (this.dueDate = dueDate)
        status && (this.StatusDebts = { connect : {id: status} })
        financeId && (this.finance = { connect : {id: financeId} })
    }
}

module.exports = {
    DebtCreateDto,
    DebtUpdateDto
}