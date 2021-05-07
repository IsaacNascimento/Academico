'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {

    static getCamposCadastro(){
        return [
            'codigo', 
            'turno', 
            'professor_id', 
            'disciplina_id', 
            'sala_id',
            'semestre_id'
        ]
    }

    semestre(){ // Singular porque somente vai retornar um objeto

        return this.belongsTo('App/Models/Semestre') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    sala(){ // Singular porque somente vai retornar um objeto

        return this.belongsTo('App/Models/Sala') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    professor(){ // Singular porque somente vai retornar um objeto

        return this.belongsTo('App/Models/Professor') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    disciplina(){ // Singular porque somente vai retornar um objeto

        return this.belongsTo('App/Models/Disciplina') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    alunos(){ // Singular porque somente vai retornar um objeto

        return this.belongsToMany('App/Models/Aluno').pivotTable('turmas_alunos')// Disciplina Pertecem a curso
                  // Pertecem a 
    }
}

module.exports = Turma
