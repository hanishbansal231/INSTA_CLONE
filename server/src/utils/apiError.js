class apiError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong...',
        errors = [],
        stack = ''
    ) {
        super(message);

        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = true;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }

    }
}

export default apiError;