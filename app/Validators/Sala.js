'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Sala extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      capacidade: 'integer',
      tipo: 'max:1|min:1'
    }
  }
}

module.exports = Sala
