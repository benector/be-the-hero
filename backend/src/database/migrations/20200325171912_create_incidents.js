//------CRIAÇÃO DA TABELA INCIDENTES---------

//script para quando a migration for executada
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
       table.increments();//chave primaria que se auto incrementa (id da postagem)
       table.string('title').notNullable();
       table.string('description').notNullable();
       table.decimal('value').notNullable();
       table.string('ong_id').notNullable();//relacionamento
       //esse id precisa estar cadastrado na tabela ong (chave estrangeira)
       table.foreign('ong_id').references('id').inTable('ongs');
     });
   };
   
   //script para quando quer desfazer
   exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
   };
