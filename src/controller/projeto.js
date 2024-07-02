const projeto = require('../model/projeto')

class ProjetoController {
    async criarProjeto(titulo, descricao, autorId, transaction) {
        if (!titulo || !descricao || !autorId ) {
            throw new Error('Titulo, descrição e autorId são obrigatórios.')
        }

        const novoProjeto = await projeto.create({
            titulo,
            descricao,
            autorId
        }, {transaction})

        return novoProjeto
    }

    async alterarProjeto(id, titulo, descricao, autorId) {
        if (!id || !titulo || !descricao || !autorId) {
            throw new Error('Titulo, descrição e autorId são obrigatórios.')
        }

        const projetoEncontrado = await projeto.findByPk(id)

        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }
        projetoEncontrado.titulo = titulo;
        projetoEncontrado.descricao = descricao;
        projetoEncontrado.autorId = autorId;

        projetoEncontrado.save()

        return projetoEncontrado
    }

    async deletarProjeto(id, transaction) {
        const projetoEncontrado = await projeto.findByPk(id)
        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }

        projetoEncontrado.destroy({transaction})
        
        return "Projeto deletado"
    }

    async atualizarProjeto(id, titulo, descricao, autorId, transaction) {
        const projetoEncontrado = await projeto.findByPk(id)
        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }
        projetoEncontrado.titulo = titulo;
        projetoEncontrado.descricao = descricao;
        projetoEncontrado.autorId = autorId;

        return projetoEncontrado.save({transaction})
    }

    async buscarPorId(id) {
        const projetoEncontrado = await projeto.findByPk(id)

        return projetoEncontrado
    }

    async listarProjetos(){
        const projetos = await projeto.findAll();
        return projetos
    }
}

module.exports = new ProjetoController()
