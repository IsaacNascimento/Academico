'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {
    static getCamposCadastro(){
        return [
            'nome', 
            'cpf', 
            'data_nascimento', 
            'matricula', 
            'email', 
            'telefone', 
            'cep', 
            'logradouro', 
            'complemento', 
            'bairro', 
            'uf', 
            'municipio'
        ]
    }

    turmas(){ // Singular porque somente vai retornar um objeto

        return this.belongsToMany('App/Models/Turma').pivotTable('turmas_alunos')// Disciplina Pertecem a curso
                  // Pertecem a 
    }
}

module.exports = Aluno
