const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async ()=>{

        await connection.migrate.rollback(); //zera o BD desfaz a migration pra nao salvar as mesmas coisas toda vez e nao lotar o BD
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy(); //desfaz a conexão com o banco de dados
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)//dados da resposta que o servidor vai retornar
        .post('/ongs')
        .send({
            name : "testando validação",
            email : "contato@gmail.com",
            whatsapp : "3200000000",
            city : "Juiz de Fora",
            uf : "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});