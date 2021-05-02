'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Disciplina= use('App/Models/Disciplina')

class DisciplinaSeeder {
  async run () {
    await Disciplina.createMany([
      {id: 1,nome: 'Backend', horas: 90, curso_id: 1},
      {id: 2,nome: 'Direito', horas: 100, curso_id:  2 },
      {id: 3,nome: 'Engenharia', horas: 180, curso_id: 4},
      {id: 4,nome: 'Medicina', horas: 80,  curso_id: 5},
      {id: 5,nome: 'Enfermagem', horas:30, curso_id: 5},
      {id: 6,nome: 'Psicologia',horas: 50, curso_id: 6},
    ])
  }
}

module.exports = DisciplinaSeeder
