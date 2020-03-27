/*importando o modulo express para a varável express*/ 
const express = require('express'); 
/*importando rotas*/
const routes = require('./routes');

const cors = require('cors');

/*variavel para armazenar a aplicação*/ 
const app = express();
app.use(cors());//daremos um endereço para acesso da aplicação

/*temos que informar ao express que utilizaremos json para o corpo(body das requisições, 
  com o codigo abaixo estou falando para que antes de todas as requisções (por isso o 
  codigo deve vir antes das rotas) o deve express ir no corpo da requisição converter o 
  json em objeto do javascript (algo entendivel pela aplicação)*/
app.use(express.json());
app.use(routes);






/*mandar a aplicação ouvir a port 3333 (acessa-la por essa porta) */
app.listen(3333);

 /*CONFIGURAÇÃO BANCO DE DADOS
    3 formas de conexão
    -Driver: select * from users
    -Query Builder: table('users).select('*').where()
      =>Usarmeos o Query Builder >> knex <<
  */

/*OBSERVAÇÕES DO TERMINAL:
*para não precisar reiniciar o node toda hora vamos instalar o
pacote nodemon usando a opçãõ '-D' ao invés de salvar o nodemon
como dependência da aplicação ele o salva como uma dependência de
desenvolvimento, ou seja, o nodemon é uma bibliotca a ser utilizada
apenas no momento de desenvolvimento, porque depois de pronta e 
jogada online a um servidor em produção não será necesário monitorar
 o código
*/