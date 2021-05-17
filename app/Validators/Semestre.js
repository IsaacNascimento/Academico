'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Semestre extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      data_inicio: 'required|date',
      data_fim: 'required|date',
    }
  }
}

module.exports = Semestre
