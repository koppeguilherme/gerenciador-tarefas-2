const express = require('express');
const TarefaApi = require('../api/tarefa');
const tarefa = require('../model/tarefa');

const router = express.Router();

router.post('/', TarefaApi.criarTarefa)
router.get('/', TarefaApi.listarTarefas)
router.put('/:id',TarefaApi.atualizarTarefa)
router.delete('/:id',TarefaApi.deletarTitulo)

module.exports = router;