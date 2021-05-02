'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Curso = use('App/Models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      {id: 1, nome: 'Anaálise  e desenvolvimento de sistemas', duracao:5},
      {id: 2, nome: 'Direito', duracao:5},
      {id: 3, nome: 'Engenharia', duracao:4},
      {id: 4, nome: 'Medicina', duracao:8},
      {id: 5, nome: 'Enfermagem', duracao:3},
      {id: 6, nome: 'Psicologia', duracao:5},
    ])
  }
}

module.exports = CursoSeeder
