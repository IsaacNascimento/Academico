'use strict'

const Curso = use('App/Models/Curso')

class CursoController {

  async index({request}){ // select from cursos
    

    //const {duracao} = request.all()
             
    /*return Curso.query()                   // Url =>  /cursos?duracao=8
                //.where('duracao', duracao) // Selecionar os dados pelo duracao
                .fetch()                     // O Curso.query().fetch() é que return Curso.all(); Mais indicado para uso devido a possibilidade de filtragem */

   
               
    //return Curso.query().paginate(3, 5) // Url -> /cursos 
                                          //mostar pag para não sobrecarregar o front end. Primeiro número seleciona a pag que vc quer buscar. Segundo número indica a quantidade de dados por página
                                          //nesse caso é a 3º pag com 5 dados
    
    /*const {page} = request.all()
    return Curso.query().paginate(page, 1) */
                                         // Urç -> /cursos?page=1
                                         // Seleciona a pag pela url, indicando pelo número 1 a quantidade de dados

   /* const {page, perPage} = request.all()
    return Curso.query().paginate(page, perPage) */ 
                                        // Url => /cursos?page=1&&perPage=4
                                        // Mesma coisa, porém agora a indicação do num de pag e quantidade de dados é pela url 
                                
    let {page, perPage} = request.all()
    
    perPage = perPage ? perPage : 5 // Se tiver passado a quantidade de dados por pag na url, então ele é igual ao dado da url, se não, ele vai ser 5. 
   
    return Curso.query().paginate(page, perPage)  
                                        // Url => /cursos?page=2 ou /cursos?page=1&&perPage=4
                                        // Mesma coisa, porém agora a indicação do num de pag e quantidade de dados é pela url ou if ternario da linha 34, na qual é 5.                             
                                            

    return Curso.all();
  }


  async show({params, request}){

    // select * from cursos where id = :id
    return await Curso.findOrFail( params.id);

  }

  async store({request}){
    
    const curso = request.only(['nome', 'duracao'])
    return await Curso.create(curso)

     /*const {nome, duracao} = request.all()
     const curso = {nome, duracao}
     return await Curso.create(curso) */ // retorno o objeto inserido de forma sincrona (await) e cria um dado no BD
  }
  
  async update({request}){

  }
  async destroy({params, request}){                    // Url => /cursos/56
    const curso = await Curso.findOrFail( params.id); // Para apagar um dado é necessário primeiramente pesquisar no BD

    return await curso.delete();   // Depois de recuperado o dado, vc pode excluir
  }

}

module.exports = CursoController
