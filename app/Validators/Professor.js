'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Professor extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:40|min:2',
      cpf: 'required|max:14|min:11',
      matricula: 'required|max:20|min:5',
      salario: 'integer',
      email: 'max:100|min:11|email',
      telefone: 'max:15|min:14',
    }
  }
}

module.exports = Professor
