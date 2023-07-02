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
        this.status = status
        this.financeId = financeId
    }
}

module.exports = {
    DebtCreateDto
}