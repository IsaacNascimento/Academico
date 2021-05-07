'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Curso = use("App/Models/Curso")
/**
 * Resourceful controller for interacting with Cursos
 */
class CursoController {
  /**
   * Show a list of all Cursos.
   * GET Cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all()

    perPage = perPage ? perPage : 5

    return await Curso.query().paginate(page, perPage);
  }

  /* METODO CREATE É PARA FORM FRONT END
   * Render a form to be used for creating a new Curso.
   * GET Cursos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   
  async create ({ request, response, view }) {
    return "TUDO CERTO"
  }*/

  /**
   * Create/save a new Curso.
   * POST Cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const curso = request.only(['nome', 'duracao'])
    //return await Curso.create(curso)

    const campos = Curso.getCamposCadastro() //Forma mais elegante
    const curso = request.only(campos)
    return await Curso.create(curso)

  }

  /**
   * Display a single Curso.
   * GET Cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Curso.query()                 
                      .with('disciplinas')
                      .where('id', params.id)
                      .first();
  }

  /* METODO EDIT É PARA FORM FRONT END
   * Render a form to update an existing Curso.
   * GET Cursos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
  
    async edit ({ params, request, response, view }) {
  }*/

  /**
   * Update Curso details.
   * PUT or PATCH Cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {   //  ROUTE =>  http://127.0.0.1:3333/Cursos/14
    //const curso = await Curso.findOrFail(params.id); //Recupera dados do BD
    //const dados = request.only(['nome', 'duracao']); // Insere/recebe dados 

    //curso.merge(dados); //Sobrescreve os dados inserirdos nos do BD
    //curso.save(); //Salva os dados inseridos

    //return curso; //retonra os novos dados

    const curso = await Curso.findOrFail(params.id); //Forma mais elegante

    const campos = Curso.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    curso.merge(dados);
    curso.save();

    return curso;
  }

  /**
   * Delete a Curso with id.
   * DELETE Cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const curso = await Curso.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await curso.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = CursoController
