'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Turma = use('App/Models/Turma')

class TurmaSeeder {
  async run () {
    await Turma.createMany([
      {id: 1, turno: 'matutino'  ,codigo:'1' , professor_id: '1' , disciplina_id: '1' , sala_id: '1'     ,  semestre_id: '1'  },
      {id: 2, turno: 'matutino'  ,codigo:'2' , professor_id: '2' , disciplina_id: '2' , sala_id: '2'     ,  semestre_id: '2'  },
      {id: 3, turno: 'matutino'  ,codigo:'3' , professor_id: '3' , disciplina_id: '3' , sala_id: '3'     ,  semestre_id: '3'  },
      {id: 4, turno: 'matutino'  ,codigo:'4' , professor_id: '4' , disciplina_id: '4' , sala_id: '4'     ,  semestre_id: '4'  },
      {id: 5, turno: 'matutino'  ,codigo:'5' , professor_id: '5' , disciplina_id: '5' , sala_id: '5'     ,  semestre_id: '5'  },
      {id: 6, turno: 'matutino'  ,codigo:'6' , professor_id: '6' , disciplina_id: '6' , sala_id: '6'     ,  semestre_id: '6'  },
    ])
  }
}

module.exports = TurmaSeeder
