const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    required: true
  });
  
module.exports = mongoose.model('Product', userSchema);