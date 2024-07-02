const TarefaController = require('../../../controller/tarefa'); 

describe("Listar as tarefas", () => {

    it("Listar as tarefas", async () => {

        const request = await TarefaController.listarTarefas()

        expect(request.length).toBeGreaterThan(0)
    });
});
