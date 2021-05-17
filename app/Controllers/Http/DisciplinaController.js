'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Disciplinas = use("App/Models/Disciplina")
/**
 * Resourceful controller for interacting with Disciplinass
 */
class DisciplinasController {
  /**
   * Show a list of all Disciplinass.
   * GET Disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Disciplinas.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Disciplinas.
   * GET Disciplinass/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Disciplinas.
   * POST Disciplinass
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Disciplinas.getCamposCadastro() //Forma mais elegante
    const disciplinas = request.only(campos)
    return await Disciplinas.create(disciplinas)
  }

  /**
   * Display a single Disciplinas.
   * GET Disciplinass/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
   return await Disciplinas.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                            .with('curso')
                            .with('turmas')
                            .where(' id', params.id)
                            .first();
  }  

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Disciplinas.
   * GET Disciplinass/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Disciplinas details.
   * PUT or PATCH Disciplinass/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Disciplinass/14
    /*const Disciplinas = await Disciplinas.findOrFail(params.id); //Recupera dados do BD
    const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    Disciplinas.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    Disciplinas.save(); //Salva os dados inseridos

    return Disciplinas; //retonra os novos dados*/

    //disciplina.merge(dados);
    //disciplina.save();

    const disciplina = await Disciplinas.findOrFail(params.id); //Forma mais elegante

    const campos = Disciplinas.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    disciplina.merge(dados);
    await disciplina.save();

    return disciplina;
  }

  /**
   * Delete a Disciplinas with id.
   * DELETE Disciplinass/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const Disciplinas = await Disciplinas.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await Disciplinas.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = DisciplinasController
