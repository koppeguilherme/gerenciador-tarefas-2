const ProjetoController = require('../../../controller/projeto'); 

describe("Listar os projeto", () => {

    it("Listar os projeto", async () => {

        const request = await ProjetoController.listarProjetos();

        expect(request.length).toBeGreaterThan(0)
    });
});
