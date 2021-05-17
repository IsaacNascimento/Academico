'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Professores = use("App/Models/Professor")

/**
 * Resourceful controller for interacting with professors
 */
class ProfessorController {
  /**
   * Show a list of all professors.
   * GET professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5

    return await Professores.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new professor.
   * GET professors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new professor.
   * POST professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const professores = request.only(['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone' ])
    //return await Professores.create(professores)

    const campos = Professores.getCamposCadastro() //Forma mais elegante
    const professores = request.only(campos)
    return await Professores.create(professores)
  }

  /**
   * Display a single professor.
   * GET professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Professores.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                            .with('turmas')
                            .where('id', params.id)
                            .first();
    
  }

  /**
   * Render a form to update an existing professor.
   * GET professors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update professor details.
   * PUT or PATCH professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const professor = await Professores.findOrFail(params.id); //Forma mais elegante

    const campos = Professores.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    professor.merge(dados);
    await professor.save();

    return professor;
  }

  /**
   * Delete a professor with id.
   * DELETE professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const professor = await Professores.findOrFail(params.id);

    return await professor.delete();
  }
}

module.exports = ProfessorController
