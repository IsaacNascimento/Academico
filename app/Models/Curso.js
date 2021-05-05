'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Model = use('Model')

class Curso extends Model {
  
    static getCamposCadastro(){
        return [
            'nome',
            'duracao'
        ]
    }

    disciplinas(){ // Plural porque varias disciplias pertecem ao curso

         return this.hasMany('App/Models/Disciplina') // (Muitas Disciplinas pertecem a um curso) 
                   //hasMany retorna um array
    }

}

module.exports = Curso
