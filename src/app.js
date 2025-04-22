const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Rota para listar as tarefas (API)
app.get('/api/tarefas', (req, res) => {
  // Simulando uma lista de tarefas, no caso, substitua com dados reais de um banco de dados
  const tarefas = [
    { id: 1, nome: 'Tarefa 1' },
    { id: 2, nome: 'Tarefa 2' },
    { id: 3, nome: 'Tarefa 3' }
  ];

  res.json(tarefas);  // Retorna a lista de tarefas em formato JSON
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
