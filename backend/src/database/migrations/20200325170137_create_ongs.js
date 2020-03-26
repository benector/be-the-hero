//------CRIAÇÃO DA TABELA ONGS---------

//script para quando a migration for executada
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//script para quando quer desfazer
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
//para criar a tabela: npx knex migrate:latest