'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/*
// Listagem = GET
Route.get('/cursos', 'CursoController.index')

// Inserir = POST
Route.post('/cursos', 'CursoController.create')

// Alterar = PUT 
Route.put('/cursos', 'CursoController.update')

// Excluir = DELETE
Route.delete('/cursos', 'CursoController.destroy')

// Recuperar um registro = SHOW
Route.get('/cursos', 'CursoController.show')
*/

Route.post('/token', 'UserController.token')
Route.resource('/users', 'UserController').apiOnly()


Route.group(()=> {

  Route.resource('/cursos', 'CursoController')
     .apiOnly()
     .validator(new Map([
       [['store', 'update'], 'Curso'], //qual metodo eu vou usar o validador. Nesse caso o método store, put usam o Curso Validator.
     ]))
     //.middleware('auth')
     
Route.resource('/alunos', 'AlunoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Aluno'], 
    ]))

Route.resource('/disciplinas', 'DisciplinaController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Disciplina'], 
    ]))

Route.resource('/escolas', 'EscolaController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Escola'], 
    ]))

Route.resource('/professores', 'ProfessorController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Professor'], 
    ]))

Route.resource('/salas', 'SalaController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Sala'], 
    ]))

Route.resource('/semestres', 'SemestreController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Semestre'], 
    ]))

Route.resource('/turmas', 'TurmaController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Turma'], 
    ]))

Route.resource('/turmas_alunos', 'TurmasAlunoController')
     .apiOnly()
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'TurmasAluno'], 
    ]))

}).middleware('auth')


