'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Disciplina extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:25|min:3',
      horas: 'integer|max:4',
      curso_id: 'integer|required'
    }
  }
}

module.exports = Disciplina
