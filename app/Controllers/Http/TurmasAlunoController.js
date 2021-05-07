'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Turma_Aluno = use('App/Models/TurmasAluno')

/**
 * Resourceful controller for interacting with turmasalunos
 */
class TurmasAlunoController {
  /**
   * Show a list of all turmasalunos.
   * GET turmasalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5

    return await Turma_Aluno.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new turmasaluno.
   * GET turmasalunos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new turmasaluno.
   * POST turmasalunos
   * 
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const turma_aluno = request.only(['turma_id', 'aluno_id'])
    //return await Turma_Aluno.create(turma_aluno)

    const campos = Turma_Aluno.getCamposCadastro() //Forma mais elegante
    const turmasalunos = request.only(campos)
    return await Turma_Aluno.create(turmasalunos)
  }

  /**
   * Display a single turmasaluno.
   * GET turmasalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Turma_Aluno.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                            /*.with('alunos')
                            .with('turmas')*/
                            .where(' id', params.id)
                            .first();
  }

  /**
   * Render a form to update an existing turmasaluno.
   * GET turmasalunos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update turmasaluno details.
   * PUT or PATCH turmasalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const turmasalunos = await Turma_Aluno.findOrFail(params.id); //Forma mais elegante

    const campos = Turma_Aluno.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    turmasalunos.merge(dados);
    turmasalunos.save();

    return turmasalunos;

  }

  /**
   * Delete a turmasaluno with id.
   * DELETE turmasalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turmasaluno = await Turma_Aluno.findOrFail(params.id);

    return await turmasaluno.delete();
  }
}

module.exports = TurmasAlunoController
