const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExampleSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model('Example', ExampleSchema);
