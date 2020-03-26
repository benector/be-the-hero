//===========AQUI FAZEMOS O FAMOSO CRID======

//conexão com o banco:
const connection = require('../database/connection');

module.exports = {

    //LISTAGEM (INDEXAÇÃO) DOS CASOS
    async index(request,response){

        //==PAGINAÇÃO==
        const { page = 1} = request.query;//vai ser 1 caso não exista esse parametro na rota
        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents')
        .join('ongs','ongs.id', '=' , 'incidents.ong_id')//relacionar dados de duas tabelas
        .limit(5)
        .offset((page-1)*5)//começa do 0 e pega os 5 proximos registros (pula)
        .select(['incidents.*', 
                'ongs.name',
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);//colocando o numero total de registros na header x-total-count
        
        return response.json(incidents);
    },


    //CADASTRO DOS CASOS

    async create(request,response){
        const {title, description, value} = request.body;
            //cabeçalho da reuisição, autenticação do usuário, localização, contexto da reuisição

        const ong_id = request.headers.authorization;//chave estrangeira
        //o primeiro valor desse array será armazenado na variavel id
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        //as chaves mostram o nome da informação sendo enviada
        return response.json({ id });

    },
    //REMOÇÃO DE CASOS
    async delete(request,response){
        const { id } = request.params;//pega o id do request.params(rota)
        const ong_id = request.headers.authorization;//chave estrangeira
        //temos que assegurar uqe a ong requisiçãõ do caso foi
        //a que criou o mesmo:
        const incident = await connection('incidents')
        .where('id',id)//id de uem ta fazendo requisição
        .select('ong_id')//coluna ong_id
        .first();//temos um unico registro no fim das contas né

        if(incident.ong_id != ong_id ){
            //codigo 401 signfica não autorizado
            return response.status(401).json({error: 'Operation not permitted'});
        }
        
        await connection('incidents').where('id', id).delete();

        //codigo 204 deu certo mas não tem conteudo pra retornar
        return response.status(204).send();
    }
};