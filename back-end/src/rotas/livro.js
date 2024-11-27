const { Router } = require('express');
const {
  getLivros,
  postLivro,
  getLivro,
  patchLivro,
} = require('../controladores/livro');
const { deletarLivroPorId } = require('../servicos/livros');

const router = Router();

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deletarLivroPorId);

module.exports = router;
