const Movie = require('../models/movie');

module.exports = {
  Query: {
    async movies(parent, args) {
        const res = await Movie.find().skip(args.offset).limit(args.limit);
        return res;
    },
  },

  Mutation: {
      async create_movie(parent, args) {
        const res = await Movie.create(args);
        return res;
      }
  },

};