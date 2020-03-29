const knex = require('knex');
const configuration = require('../../knexfile');//voltando duas pastas pra chegar na pasta raiz

//NODE_ENV variaveis ambiente
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //test esta dentro do knexfile

const connection = knex(config);

module.exports = connection;