const database = require('../database/db')

class Projeto {
    constructor() {
        this.model = database.db.define('projetos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [10, 100],
                        msg: "O titulo deve ter entre 10 e 100 caracteres"
                    }
                }
            },
            descricao: {
                type: database.db.Sequelize.STRING
            },
            autorId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        })
    }
}

module.exports = (new Projeto()).model