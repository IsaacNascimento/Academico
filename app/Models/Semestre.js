'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Semestre extends Model {

    static getCamposCadastro(){
        return [
            'nome',
            'data_inicio', 
            'data_fim'
        ]
    }
    turmas(){ // Plural porque varias Turma pertecem ao Semestre

        return this.hasMany('App/Models/Turma') // (Muitas turma pertecem a uma Semestre) 
                  //hasMany retorna um array
   }

}

module.exports = Semestre
