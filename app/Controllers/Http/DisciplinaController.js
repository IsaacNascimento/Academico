'use strict'

const Discplina = use('App/Models/Disciplina')

class DisciplinaController {

  async index({request}){
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5
    return Discplina.query().paginate(page, perPage);  

     /*const {curso_id}= request.all()
     const query = Disciplina.query()

     if(curso_id){
       query.where('curso_id', curso_id)
     }
      return query.fetch()*/


     /*return Discplina.query().where('curso', 'like' , %end%).fetch();*/


     /*return Discplina.query().where('horas', '<' , 60).fetch(); */

    /*return Discplina.all();  - Tudo
    return Discplina.query().select(['id', 'nome']).fetch(); - Selecionar somente as ids eos nomes
    return Discplina.query().fetch();  - Tudo
    return Discplina.query().first();  - Selecionar primeiro
    return Discplina.query().last();   - Selecionar Ultimo
    return Discplina.query().count();  - Contar*/
  }
  async show ({params, request, response }) {
    return await Discplina.findOrFail( params.id);
  }

  async store ({ request, response }) {
    const disciplinas = request.only(['nome', 'horas', 'curso_id'])
    return await Discplina.create(disciplinas)
  }

  
  async update({request}){

  }
  async destroy({params, request}){
    const disciplina = await Discplina.findOrFail(params.id);

    return await disciplina.delete(); 

  }

}

module.exports = DisciplinaController
