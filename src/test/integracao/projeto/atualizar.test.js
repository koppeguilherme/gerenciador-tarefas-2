const ProjetoController = require('../../../controller/projeto'); 
const conexao = require('../../../database/db')

describe("Atualizar um projeto", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Atualizar um projeto existente", async () => {

        const projetoAtualizado = {
            titulo: "Projeto Atualizado",
            descricao: "Descrição Atualizada",
            status: "inativo",
            autorId: 1
        }

        const { dataValues } = await ProjetoController.atualizarProjeto(
            1,
            projetoAtualizado.titulo, 
            projetoAtualizado.descricao, 
            projetoAtualizado.autorId,
            this.transaction
        );

        expect(dataValues.titulo).toBe(projetoAtualizado.titulo); 
        expect(dataValues.descricao).toBe(projetoAtualizado.descricao);
        expect(dataValues.autorId).toBe(projetoAtualizado.autorId);
    });
});
