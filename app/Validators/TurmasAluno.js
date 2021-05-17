'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class TurmasAluno extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      turma_id: 'integer|required',
      aluno_id: 'integer|required',
    }
  }
}

module.exports = TurmasAluno
