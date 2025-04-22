const express = require('express');
const router = express.Router();
const Tarefa = require('../models/Tarefa');

router.get('/', async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar tarefas' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novaTarefa = new Tarefa({ nome: req.body.nome });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar tarefa' });
  }
});

// PUT - atualizar uma tarefa existente
router.put('/:id', async (req, res) => {
  try {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(
      req.params.id,
      { nome: req.body.nome },
      { new: true }
    );
    res.json(tarefaAtualizada);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar tarefa' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Tarefa.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao deletar tarefa' });
  }
});

module.exports = router;
