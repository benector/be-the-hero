//criando componente
import React, { useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'; //fi é feather icons

/*IMPORTANDO API */
import api from '../../services/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');


    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e)
    {/*recebe o resultado do submit */
        e.preventDefault(); /*impede a pagina de recarregar */
    
        const data = { /*isto é um objeto javascript ue vamos enviar a api */
            title, 
            description, 
            value
        };
    
       try{  
           await api.post('incidents', data, {headers : {Authorization : ongId,}});
        /*axios envia data como json por padrao */
       /* alert(`Seu ID de acesso: ${response.data.id}`); usando crase posso colocar variavel dentro da string*/ 
           history.push('/profile'); /*enviando pra rota raiz */
    
        }catch(err){
            alert('Erro no cadastro do caso, tente novamente');
        }
        
    }

    return(
        <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamenete para encontrar um herói
                para resolver isso.
            </p>
            <Link className="back-link" to="/profile">
                      <FiArrowLeft size={16} color="#E02041" />
                      Voltar para home
                </Link>
          </section>
        
        <form onSubmit={handleNewIncident}>
            <input placeholder="Título do caso"
            value={title}
            onChange = {e => setTitle(e.target.value)}
            />
            <textarea placeholder="Descrição"
            value={description}
            onChange = {e => setDescription(e.target.value)}
            />
            <input  placeholder="Valor em reais"
            value={value}
            onChange = {e => setValue(e.target.value)}
            />
          
            <button className="button" type="submit">Cadastrar</button>

        </form>

        </div>
    </div>
    );
}
