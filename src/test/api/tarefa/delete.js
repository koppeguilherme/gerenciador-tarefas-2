const app = require('../../../src/index')
const request = require('supertest')

describe('Deletar task', () => {

    beforeAll(async () => {
        console.log('Inicializando testes')
    })

    afterAll(async () => {
        console.log('Finalizando testes')
    })

        it('Deletar task', async () => {
            const response = await request(app)
            .delete('/api/v1/tarefa/1');
            console.log(response.body)
            expect(response.statusCode).toBe(204);
        })
})