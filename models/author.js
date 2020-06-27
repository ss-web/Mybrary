const mongoose = require('mongoose');

const authroSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Author', authroSchema);