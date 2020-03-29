//ARQUIVO DE ROTAS

/* 1) CRIAR UMA ROTA:
   '/' é rota raiz 
   -a rota tem o recurso que queremos acessar, cujo qual vem depois da rota
   -o app.get signfica ue minha rota é acessivel pelo metodo GET (http get) */

/** MÉTODOS HTTP:
 * 
 * a) GET: quando queremos buscar/listar uma inormação do backend (que vai retorna-la)
 *    -exemplo acessar um usuário
 * b) POST: quando uisermos criar uma informação no backend 
 *    -exemplo criar um usuário
 * c) PUT: alterar informação no backend
 * d) DELETE: deletar informação no backend
 * 
 *    -Quando requisitamos uma URL o navegador usa apenas o méteodo GET
 *    -Para visualizar o retorno dos outros métodos, vamos usar o software >Insomnia<.

 */
/** TIPOS DE PARÂMETROS
 * 
 * a) Query Params: Parametros nomeados dentro da url (rota), pra especificar a busca colocando
 * condições, filtros, paginação etc
 *    -depois da rota colocar "?" e a condiçao
 * b) Route Params: Parametros usados para identificar recursos (um único recurso)
 *    -depois da rota colocar no CODIGO "/:id" que diz a minha rota que tudo que vem depois da rota vai ser nomeado como id
   c) Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */
/* PARA O CODIGO DE CRIAÇÃO DA ROTA linha 60:

   o request guarda todos os dados que vem atraves da nossa requisição
   o response é responsável por retornar uma resposta ao usuário
    
    /*QUERY PARAMS: acessar um parametro vindo da requisição
        const params = request.query;
        console.log(params) vai mostrar (no terminal)que nossa requisição com a query foi lida
    */
 
    /**ROUTE PARAMS: acessamos através do const params = request.params
      -não posso enviar parametros a mais do ue está sendo esperado, pois não são nomeados, se mandar mais
        ele pensa que se trata de outra rota
      - se eu quiser acessar um user especifico e coloco o ':id' eu uso const id = request.params;
       mas se não quero um especifico apenas coloco const params pra ver todos
     */
 
     /*REQUEST BODY
     trocar o const params = request.params por const body = request.body
     e a rota fica app.post
     
   */

 //-----------INÍCIO DOS CÓDIGOS------------// 

/*importando o modulo express para a varável express*/ 
const express = require('express'); 
/*dica:selecionar palavra e ctrl+d permite editar todas as palavras da linha de uma vez*/

const { celebrate, Segments, Joi} = require('celebrate');



const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//desacoplando o modulo de rotas do express em uma nova variavel
const routes = express.Router();

//Os Controllers tem a lógica de criação de rotas e listagem (encapsulamento/abstração)
//eles fazem inserção e exibição dos dados basicamente

routes.get('/ongs' , OngController.index );

routes.post('/ongs', celebrate({
  /**query route body */
  /*smp q o obj for uma variavel do js preciso colocar [] em volta */
  [Segments.BODY]: Joi.object({
    name: Joi.string().required(), /*nome é string obgrigatoria */
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf : Joi.string().required().length(2),
  })
}), OngController.create);

routes.get('/profile' , celebrate({
    [Segments.HEADERS] : Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }), ProfileController.index);

routes.post('/sessions', SessionController.create);


routes.get('/incidents' , celebrate({
  [Segments.QUERY] : Joi.object().keys({
    page : Joi.number(),
  })
}), IncidentController.index );


routes.post('/incidents', IncidentController.create);


routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS] : Joi.object().keys({
    id : Joi.number().required()
  })
}),IncidentController.delete );
/*exportando as rotas*/
 module.exports = routes;