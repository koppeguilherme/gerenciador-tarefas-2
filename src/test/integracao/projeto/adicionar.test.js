const ProjetoController = require('../../../controller/projeto'); 
const conexao = require('../../../database/db')

describe("Adicionar um projeto", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Adicionar um projeto", async () => {

        const projeto = {
            titulo: "Projetooooooooooooooo",
            descricao: "Projeto de teste",
            autorId: 1
        }
    
        const { dataValues } = await ProjetoController.criarProjeto(projeto.titulo, projeto.descricao, projeto.autorId, this.transaction);

        expect(dataValues.titulo).toBe(projeto.titulo); 
        expect(dataValues.descricao).toBe(projeto.descricao);
        expect(dataValues.status).toBe(projeto.status);
        expect(dataValues.autorId).toBe(projeto.autorId);
    });
});
