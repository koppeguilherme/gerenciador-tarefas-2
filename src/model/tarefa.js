const { DataTypes } = require('sequelize');
const database = require('../database/db')

class Tarefa {
    constructor() {
        this.model = database.db.define('tarefas', {
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
            status: {
                type: database.db.Sequelize.STRING,
                defaultValue: 'Pendente'
            },
            projetoId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'projetos',
                    key: 'id'
                }

            }
        });
    }
}

module.exports = (new Tarefa).model;