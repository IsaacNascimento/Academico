'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TurmasAluno extends Model {

    static getCamposCadastro(){
        return [
            'turma_id', 
            'aluno_id'
        ]
    }

    /*alunos(){ // Singular porque somente vai retornar um objeto

        return this.belongsToMany('App/Models/Aluno') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    
    turmas(){ // Singular porque somente vai retornar um objeto

        return this.belongsToMany('App/Models/Turma') // Disciplina Pertecem a curso
                  // Pertecem a 
    }*/
}

module.exports = TurmasAluno
