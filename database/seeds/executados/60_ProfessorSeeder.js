'use strict'

/*
|--------------------------------------------------------------------------
| ProfessorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Professor = use('App/Models/Professor')

class ProfessorSeeder {
  async run () {
    await Professor.createMany([
    {id: 1,nome:'Orion'    , cpf: '123' , matricula: '1234' , email: 'Orion@email.com'                              },
    {id: 2,nome:'Lucas'    , cpf: '234' , matricula: '2345' , email: 'Lucas@email.com '   ,  telefone: '111111111', },
    {id: 3,nome:'Maria'    , cpf: '222' , matricula: '2222'                               ,  telefone: '222222222'  },
    {id: 4,nome:'Fernanda' , cpf: '332' , matricula: '3332'                               ,  telefone: '333333333'  },
    {id: 5,nome:'Joelma'   , cpf: '555' , matricula: '5555', email: 'Joelma@email.com'    ,  telefone: '444444444', },
    {id: 6,nome:'Ana'      , cpf: '666' , matricula: '6666', email: 'Ana@email.com'       ,  telefone: '555555555', },
    ])

  }
}

module.exports = ProfessorSeeder
