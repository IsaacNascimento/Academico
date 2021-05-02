'use strict'

/*
|--------------------------------------------------------------------------
| AlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Aluno= use('App/Models/Aluno')

class AlunoSeeder {
  async run () {
  await Aluno.createMany([
      {id: 1,nome: 'João',    cpf:  '00000000000', data_nascimento: '05-01-20', matricula:  '00000000000', email: 'João@email.com'     ,  telefone: '000000000', cep: '1010',},
      {id: 2,nome: 'Lucas'                                                   , matricula:  '11111111111', email: 'Lucas@email.com '   ,  telefone: '111111111', cep: '2020',},
      {id: 3,nome: 'Maria',   cpf:  '22222222222' ,data_nascimento: '05-01-20', matricula:  '22222222222'                              ,  telefone: '222222222'              },
      {id: 4,nome: 'Fernanda'                                                , matricula:  '44444444444'                              ,  telefone: '333333333'              },
      {id: 5,nome: 'Joelma',  cpf:  '55555555555' ,data_nascimento: '05-01-20', matricula:  '55555555555', email: 'Joelma@email.co'    ,  telefone: '444444444', cep: '4040',},
      {id: 6,nome: 'Ana',     cpf:  '66666666666' ,data_nascimento: '05-01-20', matricula:  '66666666666'                              ,  telefone: '555555555', cep: '5004',},
    ])
  }
}

module.exports = AlunoSeeder
