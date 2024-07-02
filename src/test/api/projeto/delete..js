const app = require('../../../index')
const request = require('supertest')

describe('Deletar projeto', () => {

    beforeAll(async () => {
        console.log('Inicializando testes...')
    })

    afterAll(async () => {
        console.log('Finalizando teste...')
    })

        it('Deletar projeto', async () => {
            const response = await request(app)
            .delete('/api/v1/projeto/1');
            expect(response.statusCode).toBe(200);
        })
})