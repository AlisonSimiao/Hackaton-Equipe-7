class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class ForbidenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ForbidenError';
    this.statusCode = 403;
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = 409;
  }
}


module.exports = {
    ConflictError,
    NotFoundError,
    ForbidenError
}