'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sala extends Model {

    static getCamposCadastro(){
        return [
            'nome', 
            'capacidade', 
            'tipo'
        ]
    }

    turmas(){ // Plural porque varias Turma pertecem a Sala

        return this.hasMany('App/Models/Turma') // (Muitas turma pertecem a uma Sala) 
                  //hasMany retorna um array
   }
}

module.exports = Sala
