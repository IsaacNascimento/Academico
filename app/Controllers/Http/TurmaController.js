'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Turma = use('App/Models/Turma')

/**
 * Resourceful controller for interacting with turmas
 */
class TurmaController {
  /**
   * Show a list of all turmas.
   * GET turmas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5

    return await Turma.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new turma.
   * GET turmas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new turma.
   * POST turmas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const turma = request.only(['codigo', 'turno', 'professor_id', 'disciplina_id', 'sala_id' ,'semestre_id'])
    //return await Turma.create(turma)

    const campos = Turma.getCamposCadastro() //Forma mais elegante
    const turma = request.only(campos)
    return await Turma.create(turma)
  }

  /**
   * Display a single turma.
   * GET turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Turma.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                      .with('semestre')
                      .with('sala')
                      .with('professor')
                      .with('disciplina')
                      .with('alunos')
                      .where(' id', params.id)
                      .first();
  }

  /**
   * Render a form to update an existing turma.
   * GET turmas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update turma details.
   * PUT or PATCH turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const turma = await Turma.findOrFail(params.id); //Forma mais elegante

    const campos = Turma.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    turma.merge(dados);
    await turma.save();

    return turma;
  }

  /**
   * Delete a turma with id.
   * DELETE turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turma = await Turma.findOrFail(params.id);

    return await turma.delete();
  }
}

module.exports = TurmaController
