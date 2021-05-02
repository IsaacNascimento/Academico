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
Route.resource('/alunos', 'AlunoController').apiOnly()
Route.resource('/cursos', 'CursoController').apiOnly()
Route.resource('/disciplinas', 'DisciplinaController').apiOnly()
Route.resource('/escolas', 'EscolaController').apiOnly()
Route.resource('/professores', 'ProfessorController').apiOnly()
Route.resource('/salas', 'SalaController').apiOnly()
Route.resource('/semestres', 'SemestreController').apiOnly()
Route.resource('/turmas', 'TurmaController').apiOnly()
Route.resource('/turmas_alunos', 'TurmasAlunoController').apiOnly()
