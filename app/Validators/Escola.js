'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Escola extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:40|min:2',
      email: 'email|max:100|min:11',
      telefone: 'max:15|min:14',
    }
  }
}

module.exports = Escola
