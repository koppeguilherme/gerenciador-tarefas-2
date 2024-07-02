const app = require('../../../index')
const request = require('supertest')

describe('List', () => {
    
        beforeAll(async () => {
            console.log('Iniciando teste automatizado...')
        })
    
        afterAll(async () => {
            console.log('Finalizando teste')
        })
    
        it('Listar usuários', async () => {
            const response = await request(app)
            // .set("Authorization", token)
                .get('/api/v1/user')
    
            expect(response.statusCode).toBe(200);
        })
})