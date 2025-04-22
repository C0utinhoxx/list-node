const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);
