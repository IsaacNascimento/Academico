'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EscolaSchema extends Schema {
  up () {
    this.create('escolas', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('email', 100)
      table.string('telefone', 15)
      table.timestamps()
    })
  }

  down () {
    this.drop('escolas')
  }
}

module.exports = EscolaSchema
