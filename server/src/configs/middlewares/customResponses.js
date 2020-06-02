const customResponses = {
    success( payload ) {
        return this.status( 200 ).json(payload);
    },

    unauthorized(payload) {
        return this.status( 401 ).json(payload);
    },

    preconditionFailed(payload) {
        return this.status( 412 ).json(payload);
    },

    blocked(payload) {
        return this.status( 403  ).json(payload);
    },

    notFound(payload) {
        return this.status( 404 ).json(payload);
    },

		repeat(payload) {
        return this.status( 409 ).json(payload);
    },

    serverError(payload) {
        return this.status( 503 ).json(payload);
    },
};

module.exports = ( req, res, next ) => {
    Object.assign( res, customResponses );
    next();
};