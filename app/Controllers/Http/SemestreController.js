'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Semestre = use('App/Models/Semestre')

/**
 * Resourceful controller for interacting with semestres
 */
class SemestreController {
  /**
   * Show a list of all semestres.
   * GET semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5

    return await Semestre.query().paginate(page, perPage);
    }

  /**
   * Render a form to be used for creating a new semestre.
   * GET semestres/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new semestre.
   * POST semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const semestre = request.only(['nome', 'data_inicio', 'data_fim'])
    //return await Semestre.create(semestre)

      const campos = Semestre.getCamposCadastro() //Forma mais elegante
      const semestre = request.only(campos)
      return await Semestre.create(semestre)
    
  }

  /**
   * Display a single semestre.
   * GET semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Semestre.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                         .with('turmas')
                         .where('id', params.id)
                         .first();
  }

  /**
   * Render a form to update an existing semestre.
   * GET semestres/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update semestre details.
   * PUT or PATCH semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const semestre = await Semestre.findOrFail(params.id); //Forma mais elegante

    const campos = Semestre.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    semestre.merge(dados);
    await semestre.save();

    return semestre;
  }

  /**
   * Delete a semestre with id.
   * DELETE semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id);

    return await semestre.delete();
  }
}

module.exports = SemestreController
