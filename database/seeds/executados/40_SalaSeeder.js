'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Sala= use('App/Models/Sala')

class SalaSeeder {
  async run () {
    await Sala.createMany([
      {id: 1,nome: 'Backend', capacidade:    10 , tipo: 5},
      {id: 2,nome: 'Direito', capacidade:    10 , tipo: 5},
      {id: 3,nome: 'Engenharia', capacidade: 10 , tipo: 5},
      {id: 4,nome: 'Medicina', capacidade:   10 , tipo: 5},
      {id: 5,nome: 'Enfermagem', capacidade: 10 , tipo: 5},
      {id: 6,nome: 'Psicologia', capacidade: 10 , tipo: 5},
    ])
  }
}

module.exports = SalaSeeder
