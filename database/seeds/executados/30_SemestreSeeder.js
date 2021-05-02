'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Semestre= use('App/Models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      {id: 1,nome: '1ºsemestre2020', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
      {id: 2,nome: '1ºsemestre2021', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
      {id: 3,nome: '1ºsemestre2022', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
      {id: 4,nome: '1ºsemestre2023', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
      {id: 5,nome: '1ºsemestre2024', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
      {id: 6,nome: '1ºsemestre2025', data_inicio:    '10-05-20' ,data_fim: '05-12-20'},
    ])
  }
}

module.exports = SemestreSeeder
