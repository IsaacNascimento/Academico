'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmasAlunosSchema extends Schema {
  up () {
    this.create('turmas_alunos', (table) => {
      table.increments()
      table.integer('turma_id').references('id').inTable('turmas').unsigned().notNullable()
      table.integer('aluno_id').references('id').inTable('alunos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas_alunos')
  }
}

module.exports = TurmasAlunosSchema
