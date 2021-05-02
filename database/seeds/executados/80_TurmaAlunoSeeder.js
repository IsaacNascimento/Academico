'use strict'

/*
|--------------------------------------------------------------------------
| TurmaAlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TurmaAluno = use('App/Models/TurmasAluno')

class TurmaAlunoSeeder {
  async run () {
    await TurmaAluno.createMany([
      {turma_id: 1 ,aluno_id:'1'},
      {turma_id: 2 ,aluno_id:'2'},
      {turma_id: 3 ,aluno_id:'3'},
      {turma_id: 4 ,aluno_id:'4'},
      {turma_id: 5 ,aluno_id:'5'},
      {turma_id: 6 ,aluno_id:'6'},
    ])
  }
}

module.exports = TurmaAlunoSeeder
