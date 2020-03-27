//criando componente
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
//recebendo um icon como componente:
import { FiLogIn} from 'react-icons/fi'; //fi é feather icons
import './style.css';
//importando imagens
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

/*IMPORTANDO API */
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', {id});
            console.log(id);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        }
        catch(err){
            alert('Erro tenta de novo fi');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
             <img src={logoImg} alt ="Be The Hero "/>

             <form onSubmit={handleLogin}>  
                 <h1>Faça seu logon</h1>

                 <input 
                 placeholder="Sua ID"
                 value = {id}
                 onChange = {e => setId(e.target.value) }
                 />
                 <button className="button" type="submit">Entrar</button>
                 <Link className="back-link" to="/register">
                      <FiLogIn size={16} color="#E02041" />
                      Não tenho cadastro
                </Link>
             </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        
        </div>
    )
}
    

