const Tarefa = require('../models/Tarefa');

exports.listar = async (req, res) => {
  const tarefas = await Tarefa.find();
  res.json(tarefas);
};

exports.criar = async (req, res) => {
  try {
    const novaTarefa = new Tarefa(req.body);
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.deletar = async (req, res) => {
  const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
  res.json({ mensagem: 'Tarefa deletada com sucesso' });
};
