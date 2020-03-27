import React, {useState} from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
//recebendo um icon como componente:
import { FiArrowLeft } from 'react-icons/fi'; 
import logoImg from '../../assets/logo.svg';

/*IMPORTANDO API */
import api from '../../services/api';

export default function Register(){/*fará o cadastro do usuário, será disparada quando eu der SUBMIT*/
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){/*recebe o resultado do submit */
        e.preventDefault(); /*impede a pagina de recarregar */
    
        const data = { /*isto é um objeto javascript ue vamos enviar a api */
            name, email, whatsapp, city, uf
        };
    
       try{ const response = await api.post('ongs', data); /*contatando o backend pra fazer o cadastro */
                                                        /*axios envia data como json por padrao */
        alert(`Seu ID de acesso: ${response.data.id}`); /*usando crase posso colocar variavel dentro da string*/ 
        history.push('/'); /*enviando pra rota raiz */
    
    }catch(err){
            alert('Erro no cadastro, tente novamente');
        }
        
    }

    return (
    <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajude pessoas a 
                encontrarem os casos da sua ONG.
            </p>
            <Link className="back-link" to="/">
                      <FiArrowLeft size={16} color="#E02041" />
                      Não tenho cadastro
                </Link>
          </section>
        
        <form onSubmit={handleRegister}>
            <input 
            placeholder="Nome da ONG"
            value={name}
            onChange = {e => setName(e.target.value)}
            /*ouvir as mudanças do input pega o evento de mudança*/
            /*pega o valor do input e coloca na variável name do status */
             /**declarou uma função escrita no formato reduzido */
              /* 'e' é o prametro recebido e o resto o corpo da função*/
            />
            <input type="email" 
              placeholder="E-mail"
              value={email}
              onChange = {e => setEmail(e.target.value)}
            />
            <input  
               placeholder="Whatsapp"
              value={whatsapp}
              onChange = {e => setWhatsapp(e.target.value)}
            />
            <div className="input-group">
                <input
                   placeholder="Cidade"
                  value={city}
                  onChange = {e => setCity(e.target.value)}
                />
                <input  
                      placeholder="UF" style={{ width:80 }}
                      value={uf}
                      onChange = {e => setUf(e.target.value)}
                />
            </div>
            <button className="button" type="submit">Cadastrar</button>
        </form>
        </div>
    </div>
    );
}