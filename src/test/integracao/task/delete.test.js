const TarefaController = require('../../../controller/tarefa');
const conexao = require('../../../database/db')

describe("Deletar uma tarefa", () => {
    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
    })

    afterAll(() => {
        this.transaction.rollback();
    })

    it("Deletar uma tarefa", async () => {

        const result = await TarefaController.deletarTarefa(1, this.transaction);
        expect(result).toBe("Tarefa deletada");
    })
})
