const UserController = require('../../../controller/user'); 
const conexao = require('../../../database/db')

describe("Adicionar um usuario", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Adicionar um usuario", async () => {

        const User = {
            nome: "Gui alterado",
            email: "gui@gmail.com",
            senha: "12345"
        }
    
        const { dataValues } = await UserController.update(1,User.nome, User.email, User.senha, this.transaction);

        expect(dataValues.nome).toBe(User.nome);
        expect(dataValues.email).toBe(User.email);
        
    });
});
