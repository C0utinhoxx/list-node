const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.get('/api/tarefas', (req, res) => {
  const tarefas = [
    { id: 1, nome: 'Tarefa 1' },
    { id: 2, nome: 'Tarefa 2' },
    { id: 3, nome: 'Tarefa 3' }
  ];

  res.json(tarefas);  
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
