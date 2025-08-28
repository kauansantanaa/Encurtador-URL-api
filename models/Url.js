const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  urlOriginal: {
    type: String,
    required: true,
  },
  cliques: {
    type: Number,
    required: true,
    default: 0,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Url', urlSchema);