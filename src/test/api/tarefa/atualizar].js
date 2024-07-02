const app = require("../../../src/index");
const request = require("supertest");

describe("Atualizar tarefa", () => {
  beforeAll(async () => {
    console.log("Inicializando testes");
  });
  
  afterAll(async () => {
    console.log("Finalizando testes");
  });

  it('atualizar tarefa', async () => {
    const tarefa = await request(app)
    .put('/api/v1/tarefa/1')
    .send({
        titulo: 'Atualizando',
        descricao: 'Tarefa alterada!'
    })
                   
    expect(task.statusCode).toBe(200);
    expect(task.titulo).toEqual(task.titulo)
    expect(task.descricao).toEqual(task.descricao)
    
})
});
