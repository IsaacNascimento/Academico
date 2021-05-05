'use strict'

const Disciplina = use('App/Models/Disciplina')

class DisciplinaController {

  async index({request}){
    let {page, perPage} = request.all();

    perPage = perPage ? perPage : 5
    return Disciplina.query().paginate(page, perPage);  

     /*const {curso_id}= request.all()
     const query = Disciplina.query()

     if(curso_id){
       query.where('curso_id', curso_id)
     }
      return query.fetch()*/


     /*return Disciplina.query().where('curso', 'like' , %end%).fetch();*/


     /*return Disciplina.query().where('horas', '<' , 60).fetch(); */

    /*return Disciplina.all();  - Tudo
    return Disciplina.query().select(['id', 'nome']).fetch(); - Selecionar somente as ids eos nomes
    return Disciplina.query().fetch();  - Tudo
    return Disciplina.query().first();  - Selecionar primeiro
    return Disciplina.query().last();   - Selecionar Ultimo
    return Disciplina.query().count();  - Contar*/
  }
  async show ({params, request, response }) {
    //return await Disciplina.findOrFail( params.id); // Fomra primária de fazer 

    return await Disciplina.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                           .with('curso')
                           .where('id', params.id)
                           .first();
  }

  async store ({ request, response }) {
    /*const disciplinas = request.only(['nome', 'horas', 'curso_id'])
    return await Disciplina.create(disciplinas)*/

    const campos = Disciplina.getCamposCadastro() //Forma mais elegante
    const disciplinas = request.only(campos)
    return await Disciplina.create(disciplinas)
  }

  
  async update({request, params}){
    /*const disciplina = await Disciplina.findOrFail(params.id);
    const dados = request.only(['nome', 'horas', 'curso_id'])

    disciplina.merge(dados);
    disciplina.save();

    return disciplina;*/


    const disciplina = await Disciplina.findOrFail(params.id); //Forma mais elegante

    const campos = Disciplina.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    disciplina.merge(dados);
    disciplina.save();

    return disciplina;
  }
  async destroy({params, request}){
    const disciplina = await Disciplina.findOrFail(params.id);

    return await disciplina.delete(); 

  }

}

module.exports = DisciplinaController
