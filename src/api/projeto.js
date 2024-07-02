const ProjetoController = require('../controller/projeto')

class ProjetoApi {
    async criarProjeto(req, res) {
        const { titulo, descricao, autorId } = req.body

        try {
            const projeto = await ProjetoController.criarProjeto(titulo, descricao, autorId)
            return res.status(201).send(projeto)
        } catch (e) {
            console.log(e)
            return res.status(400).send({ error: `Erro ao criar projeto ${e.message}`})
        }
    }

    async deletarProjeto(req, res){
        const {id} = req.params

        try{
            await ProjetoController.deletarProjeto(id)
            return res.status(200).send('Projeto excluido com sucesso')
        } catch(e) {
            return res.status(400).send({ error: `Erro ao deletar o projeto ${e.message}`})
        }
    }

    async alterarProjeto(req, res){
        const {id} = req.params
        const {titulo, descricao, status, autorId} = req.body

        try{
            const result = await ProjetoController.alterarProjeto(id,titulo,descricao,status,autorId)
            return res.status(200).send(result)
        } catch(e){
            return res.status(400).send({ error: `Erro ao alterar o projeto ${e.message}`})
        }
    }

    async listarProjetos(req, res){
        try{
            const projetos = await ProjetoController.listarProjetos();
            return res.status(200).send(projetos)
        } catch(e){
            return res.status(400).send({erro: `Erro ao listar os projetos ${e.message}`})
        }
    }
}

module.exports = new ProjetoApi()