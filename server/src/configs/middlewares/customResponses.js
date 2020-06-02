const customResponses = {
    success( payload ) {
        return this.status( 200 ).json(payload);
    },

    preconditionFailed(payload) {
        return this.status( 412 ).json(payload);
    },
};

module.exports = ( req, res, next ) => {
    Object.assign( res, customResponses );
    next();
};