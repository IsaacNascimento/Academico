'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Escola extends Model {
    
    static getCamposCadastro(){
        return [
            'nome',
            'email',
            'telefone'
        ]
    }
}

module.exports = Escola
