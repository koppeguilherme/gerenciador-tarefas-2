const TarefaController = require('../controller/tarefa')

class TarefaApi {

    async criarTarefa(req, res){
        const {titulo, descricao, status, projetoId } = req.body;

        try{
            const tarefa = await TarefaController.criarTarefa(titulo, descricao, status, projetoId)
            return res.status(201).json({tarefa});
        } catch(e){
            return res.status(400).send({ error: `Erro ao criar a taref AAAAAAAAAAa ${e.message}` })
        }

    }
    async deletarTitulo (req, res) {
        const { id } = req.params

        try {
            await TarefaController.deletarTarefa(id)
            return res.status(200).send({ message: 'Tarefa deletada com sucesso' })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar a tarefa ${e.message}` })
        }

    }

async listarTarefas (req, res){
        try {
            const tarefas = await TarefaController.listarTarefas()
            return res.status(200).send(tarefas)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar tarefas ${e.message}` })
        }
    }

    async atualizarTarefa(req, res){
        const { id } = req.params
        const { titulo } = req.body

        try {
            await TarefaController.atualizarTarefa(id, titulo)
            return res.status(200).send({ message: 'Tarefa atualizada com sucesso' })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao atualizar a tarefa ${e.message}` })
        }
    }

}

module.exports = new TarefaApi()