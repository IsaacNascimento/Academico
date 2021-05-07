'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {

    static getCamposCadastro(){
        return [
            'nome',
            'horas',
            'curso_id'
        ]
    }

    curso(){ // Singular porque somente vai retornar um objeto

        return this.belongsTo('App/Models/Curso') // Disciplina Pertecem a curso
                  // Pertecem a 
    }
    turmas(){ // Plural porque varias Turma pertecem a disciplina

        return this.hasMany('App/Models/Turma') // (Muitas turma pertecem a uma disciplina) 
                  //hasMany retorna um array
   }
}

module.exports = Disciplina
