const app = require("../../../index");
const request = require("supertest");


describe("Uusuario atualizado", () => {
  let token

  beforeAll(async () => {
    const response = await request(app).get('/api/v1/user/login');
    const user = {
        email: "teste@gmail.com",
        senha: "teste1234"
    }
    token = response.body.token;
  });
  
  afterAll(async () => {
    console.log("Testes finalizado");
  });

  it('Atualizar usuario', async () => {
    const user = {
        nome: 'Ruhan Kaio',
        email: 'ruhankaioNovo@gmail.com',
        senha: '12345'
    }
    const response = await request(app)
    // .set("Authorization", token)
    .put('/api/v1/user/1')
        
        .send(user);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toEqual(user.name)
    expect(response.body.email).toEqual(user.email)
})
});