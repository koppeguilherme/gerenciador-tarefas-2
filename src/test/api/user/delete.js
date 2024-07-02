const app = require('../../../index')
const request = require('supertest')

describe('Deletar usuario', () => {

    beforeAll(async () => {
        console.log('Iniciando os testes')
    })

    afterAll(async () => {
        console.log('Finalizando testes')
    })

        it('Deletar usuario', async () => {
            const response = await request(app)
            // .set("Authorization", token)
            .delete('/api/v1/user/1');
            console.log(response.body)
            expect(response.statusCode).toBe(204);
        })
})