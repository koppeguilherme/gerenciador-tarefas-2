const UserController = require('../../../controller/user');

describe("Listar os usuarios", () => {

    it("Listar os usuarios", async () => {

        const request = await UserController.find();

        expect(request.length).toBeGreaterThan(0)
    });
});
