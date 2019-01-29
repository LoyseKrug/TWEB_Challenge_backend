const Example = require('../models/example.model');

module.exports = {
  Query: {
    async example(parent, { id }) {
      const res = await Example.findById(id);
      return res;
    },
    async examples() {
      const res = await Example.find();
      return res;
    },
  },

  Mutation: {
    async create_example(parent, args) {
      const res = await Example.create(args);
      return res;
    },
  },
  
};
