const express = require('express');
const rotaLivro = require('./rotas/livro');

const app = express();

const port = 8000;

app.get('/livros', rotaLivro);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
