const tarefa = require('../model/tarefa')

class TarefaController {
    async criarTarefa(titulo, descricao, status, projetoId, transaction) {
        if (!titulo || !descricao || !projetoId) {
            throw new Error('Titulo, descrição e projetoId são obrigatórios.')
        }

        const novaTarefa = await tarefa.create({
            titulo,
            descricao,
            status,
            projetoId
        }, {transaction})

        return novaTarefa
    }

    async alterarTarefa(id, titulo, descricao, status, autorId) {
        if (!id || !titulo || !descricao || !status || !autorId) {
            throw new Error('titulo, descrição, status e autorId são obrigatórios.')
        }

        const tarefaEncontrada = await tarefa.findByPk(id)

        if (!tarefaEncontrada) {
            throw new Error('tarefa não encontrada.')
        }

        tarefaEncontrada.titulo = titulo
        tarefaEncontrada.descricao = descricao
        tarefaEncontrada.status = status
        tarefaEncontrada.autorId = autorId

        await tarefaEncontrada.save()

        return tarefaEncontrada
    }

    async deletarTarefa(id, transaction) {
        const tarefaEncontrada = await tarefa.findByPk(id)
        if (!tarefaEncontrada) {
            throw new Error('Tarefa não encontrada.')
        }
        await tarefaEncontrada.destroy({transaction})

        return "Tarefa deletada"
    }

    async atualizarTarefa(id, novoStatus) {
        const tarefaEncontrada = await tarefa.findByPk(id)
        if (!tarefaEncontrada) {
            throw new Error('Tarefa não encontrada.')
        }
        tarefaEncontrada.status = novoStatus
        await tarefaEncontrada.save()
        return tarefaEncontrada
    }

    async buscarPorId(id) {
        const tarefaEncontrada = await tarefa.findByPk(id)
        return tarefaEncontrada
    }

    async listarTarefas() {
        const tarefas = await tarefa.findAll()
        return tarefas
    }
}

module.exports = new TarefaController()
