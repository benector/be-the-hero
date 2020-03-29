//===========AQUI FAZEMOS O FAMOSO CRID======

//conexão com o banco:
const connection = require('../database/connection');

const crypto = require('crypto');

const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    
    /*LISTAGEM DAS ONGS */
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
      },

    /*CADASTRO DAS ONGS*/
    async create(request,response){
        const { name, email, whatsapp, city, uf } = request.body;
        //gera 4 bytes de carcateres aleatrios e corvete numa string hexadecimal
        const id = generateUniqueId(); 
        //vai aguardar o codigo finalizar para depois prosseguir
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
 
        return response.json({ id });
    }
};