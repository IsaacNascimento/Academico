'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Curso extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:40|min:2',
      duracao: 'integer',
    }
  }
}

module.exports = Curso
