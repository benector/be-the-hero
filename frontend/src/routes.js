/*ARUIVO DE ROTAS */
import React from 'react';

/**importando BrowserRouter (este precisa ficar envolta de todas as rotas para que as nossas funcionem) */
/*importando Route que é cada uma das rotas */
/*O Switch garante que uma unica rota seja chamada por momento */
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';





/*NOSSAS ROTAS SÃO AGORA UM COMPONENTE */

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />  
                <Route path = "/register" component={ Register }/>
                <Route path = "/profile" component={ Profile }/>
                <Route path = "/incidents/new" component={ NewIncident }/>
            </Switch>
        </BrowserRouter>

    )


}