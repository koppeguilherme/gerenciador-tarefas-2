const request = require('supertest')
const app = require('../../../index')


describe('UserApi', () => {

    afterAll(async () => {
        

    })
        test('Criar usuário', async () => {
            const user = await request(app)
            // .set("Authorization", token)
            .post('/api/v1/user')
            .send({
                nome: 'Guilherme222',
                email: 'teste22222@gmail.com',
                senha: 'teste123456'
            })
                           
            expect(user.statusCode).toBe(201);
            expect(user.nome).toEqual(user.nome)
            expect(user.email).toEqual(user.email)
        })
})