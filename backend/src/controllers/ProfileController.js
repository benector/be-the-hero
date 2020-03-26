//responsavel pelo perfil de uma entidade

//conexão com o banco:
const connection = require('../database/connection');

module.exports = {

    //LISTAGEM (INDEXAÇÃO) DOS CASOS ESPECÍFICOS
    async index(request,response){
        const ong_id = request.headers.authorization;//chave estrangeira

        const incidents = await connection('incidents')
        .where('ong_id',ong_id)
        .select('*');
        
        return response.json(incidents);

        
    }
}