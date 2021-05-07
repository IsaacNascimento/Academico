'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Escola = use("App/Models/Escola")
/**
 * Resourceful controller for interacting with escolas
 */
class EscolaController {
  /**
   * Show a list of all escolas.
   * GET escolas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Escola.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new escola.
   * GET escolas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new escola.
   * POST escolas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const escola = request.only(['nome', 'email', 'telefone'])
    //return await Escola.create(escola)

    const campos = Escola.getCamposCadastro() //Forma mais elegante
    const escola = request.only(campos)
    return await Escola.create(escola)
  

  }

  /**
   * Display a single escola.
   * GET escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Escola.findOrFail( params.id);
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing escola.
   * GET escolas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update escola details.
   * PUT or PATCH escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/escolas/14
    //const escola = await Escola.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'email', 'telefone']); // Insere/recebe dados 

    //escola.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //escola.save(); //Salva os dados inseridos

    //return escola; //retonra os novos dados

    const escola = await Escola.findOrFail(params.id); //Forma mais elegante

    const campos = Escola.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    escola.merge(dados);
    escola.save();

    return escola;
  }

  /**
   * Delete a escola with id.
   * DELETE escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const escola = await Escola.findOrFail(params.id)

    return await escola.delete();
  }
}

module.exports = EscolaController
