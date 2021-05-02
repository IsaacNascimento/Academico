'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professors extends Model {

  static get table(){
    return 'professores'
    //toda vez que o nome for "diferente" fazer isso
    //como no exemplo de professor que ficaria "professors"
    //e seria impossível migrar os dados para as tables.
  }
}

module.exports = Professors
