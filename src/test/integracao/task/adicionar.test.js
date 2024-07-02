const TarefaController = require('../../../controller/tarefa'); 
const conexao = require('../../../database/db')

describe("Adicionar uma tarefa", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Adicionar uma tarefa", async () => {

        const tarefa = {
            titulo: "Tarefa1 AAAAAAAA",
            descricao: "Descrição da tarefa 1",
            status: "pendente",
            projetoId: 1
        }
    
        const { dataValues } = await TarefaController.criarTarefa(tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.projetoId, this.transaction);

        expect(dataValues.titulo).toBe(tarefa.titulo);
        expect(dataValues.descricao).toBe(tarefa.descricao);
        expect(dataValues.status).toBe(tarefa.status);
        expect(dataValues.projetoId).toBe(tarefa.projetoId);
        
    });
});
