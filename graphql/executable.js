const merge = require('lodash/merge');
const fs = require('fs');
const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');

// Individual schemas for merge
const movieResolvers = require('./movie.resolvers');

module.exports = makeExecutableSchema({
    typeDefs: fs.readFileSync(path.join(__dirname, './api.graphql'), 'utf-8'),
    resolvers: merge(
        movieResolvers,
    ),
});