const UserController = require('../../../controller/user'); 
const conexao = require('../../../database/db')

describe("Deletar um usuario", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Deletar um usuario", async () => {

        const request = await UserController.delete(1, this.transaction);

        expect(request).toBe("Usuario deletado");
    });
});
