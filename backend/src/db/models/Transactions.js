const mongoose = require('mongoose')

const Transaction = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updataedAt: {
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('Transaction', Transaction)
