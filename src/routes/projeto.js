const express = require('express');
const ProjetoApi = require('../api/projeto');

const router = express.Router();

router.post('/', ProjetoApi.criarProjeto)
router.get('/', ProjetoApi.listarProjetos)
router.put('/:id',ProjetoApi.alterarProjeto)
router.delete('/:id',ProjetoApi.deletarProjeto)

module.exports = router;