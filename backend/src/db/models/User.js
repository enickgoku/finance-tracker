const mongoose = require('mongoose')

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updataedAt: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('User', User)
