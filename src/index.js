const express = require('express')
const cors = require('cors')
const database = require('./database/db')
const UserApi = require('./api/user')
const UserRouter = require('./routes/user')
const TarefaRouter = require('./routes/tarefa')
const ProjetoRouter = require('./routes/projeto')
const AuthMiddleware = require('./middlewares/AuthMiddleware')

const authMiddleware = new AuthMiddleware()

const app = express()
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

// Rotas sem token
app.post('/api/v1/login', UserApi.login)
app.post('/api/v1/user', UserApi.createUser)

// Rotas com token
// app.use(authMiddleware.validateToken)
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/projeto', ProjetoRouter)
app.use('/api/v1/tarefa', TarefaRouter)

database.db.sync({ force: false })
    .then(_ => {
        if (process.env.NODE_ENV !== 'test' ) {
            app.listen(8000, _ => {
                console.log('Server running on port 8000')
            })
        }
    })
    .catch(e => {
        console.error(`Erro ao inicializar o banco de dados ${e}`)
    })
    module.exports = app