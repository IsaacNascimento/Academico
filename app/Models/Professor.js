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
  static getCamposCadastro(){
    return [
      'nome', 
      'cpf', 
      'matricula', 
      'salario', 
      'email', 
      'telefone' 
    ]
}

  turmas(){ // Plural porque varias Turma pertecem a Professor

    return this.hasMany('App/Models/Turma') // (Muitas turma pertecem a uma Professor) 
            //hasMany retorna um array
   }

}

module.exports = Professors
