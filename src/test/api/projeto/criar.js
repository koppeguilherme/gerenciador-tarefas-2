const request = require('supertest')
const app = require('../../../index')


describe('ProjetoApi', () => {

    afterAll(async () => {


    })
    test('Criar projeto', async () => {
        const projeto = await request(app)
            // .set("Authorization", token)
            .post('/api/v1/projeto')
            .send({
                titulo: 'Guilhermeeee',
                descricao: 'teste@gmail.com',
                status: 'teste1234',
                autorId: '1'

            })

        expect(projeto.statusCode).toBe(201);
        expect(projeto.titulo).toEqual(projeto.titulo)
        expect(projeto.descricao).toEqual(projeto.descricao)
        expect(projeto.status).toEqual(projeto.status)
        expect(projeto.autorId).toEqual(projeto.autorId)
    })
})

