const knex = require('knex');
const configuration = require('../../knexfile');//voltando duas pastas pra chegar na pasta raiz

const connection = knex(configuration.development);

module.exports = connection;