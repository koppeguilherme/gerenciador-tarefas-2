const app = require('../../../index')
const request = require('supertest')

describe('Listar projeto', () => {
    
        beforeAll(async () => {
            console.log('Iniciando teste automatizado...')
        })
    
        afterAll(async () => {
            console.log('Finalizando teste')
        })
    
        it('Listar projeto', async () => {
            const response = await request(app)
                .get('/api/v1/projeto')
    
            expect(response.statusCode).toBe(200);
        })
})