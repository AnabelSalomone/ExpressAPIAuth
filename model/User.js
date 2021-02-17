const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [6, "ERROR"],
    maxlength: [25, "ERROR"]
  },
  email: {
    type: String,
    required: true,
    max: 255,
    minlength: [6, "ERROR"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    minlength: [6, "ERROR"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema)