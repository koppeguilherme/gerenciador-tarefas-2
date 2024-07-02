const app = require('../../../src/index')
const request = require('supertest')

describe('Listar tarefas', () => {
    
        beforeAll(async () => {
            console.log('Iniciando teste automatizado')
        })
    
        afterAll(async () => {
            console.log('Finalizando teste')
        })
    
        it('Listar tarefas', async () => {
            const response = await request(app)
                .get('/api/v1/tarefa')
    
            expect(response.statusCode).toBe(200);
        })
})