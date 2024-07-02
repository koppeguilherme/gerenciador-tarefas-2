const ProjetoController = require('../../../controller/projeto'); 
const conexao = require('../../../database/db')

describe("Deletar um projeto", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Deletar um projeto", async () => {

        const request = await ProjetoController.deletarProjeto(1, this.transaction);

        expect(request).toBe("Projeto deletado");
    });
});
