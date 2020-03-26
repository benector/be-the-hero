//CRIAÇÃO DA SESSAO
//conexão com o banco:
const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const{ id } = request.body;//info vai vir atraves do corpo

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong){
            //400 = bad request
            return response.status(400).json({erros : 'No ONG found ith this ID'});
        }
        return response.json(ong);
    }
}