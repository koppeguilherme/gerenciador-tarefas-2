const request = require('supertest')
const app = require('../../../index')


describe('TarefaApi', () => {

    afterAll(async () => {


    })
    test('Criar tarefa', async () => {
        const tarefa = await request(app)
            // .set("Authorization", token)
            .post('/api/v1/tarefa')
            .send({
                titulo: 'tarefaaaaaaaaa',
                descricao: 'isso eh uma descricao',
                status: 'isso eh um status',
                projetoId: '1'

            })

        expect(tarefa.statusCode).toBe(201);
        expect(tarefa.titulo).toEqual(tarefa.titulo)
        expect(tarefa.descricao).toEqual(tarefa.descricao)
        expect(tarefa.status).toEqual(tarefa.status)
        expect(tarefa.projetoId).toEqual(tarefa.projetoId)
    })
})

