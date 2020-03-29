import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'; ///importando tags, basicamente
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

import style from './style';

//IMPORTANDO API
import api from '../../services/api';

export default function Incidents(){
    const [incidents , setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);//quando estamos buscando dados novos pra evitar que os mesmos sejam carregados novamente
                                                //carregar uma pagina por ver

    const navigation = useNavigation();/**useHistory da web */

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident}); //o mesmo nome do arquivo de rota
    }

    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total>0 && (incidents.length ==total))
        {
            return;
        }

        setLoading(true);
        //INICIO DA REQUISIÇÃO
        const response = await api.get('incidents', {
            params : { page }
        });

        setIncidents([ ... incidents, ... response.data]); //anexar dois vetores dentro de um unico vetor
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        //FIM DA REQUISIÇÃO
        setLoading(false);
    }


    useEffect(()=>{/* disparadas quando as variaveis do array mudarem*/
        loadIncidents();
    }, []);

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <Text style={style.headerText}>
                   Total de <Text style={style.headerTextBold}>{total} casos.</Text> 
                </Text>
            </View>
            <Text style={style.title}>Bem vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo
            e salve o dia.</Text>

            
            <FlatList style={style.incidentList}
            /*VAMOS LISTASR INCIDENTES */
                data={incidents}/**incidentes */
                keyExtractor={incident => String(incident.id) } /*recebe cada um dos incidentes e retorna a info unica q existe em cada um deles */
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item : incident})=>
                ( /*vai retornar um jsx */
                    <View style={style.incident}>
                    <Text style={style.incidentProperty}>ONG:</Text>
                <Text style={style.incidentValue}>
                    {incident.name} de {incident.city}/{incident.uf}
                    </Text>

                    <Text style={style.incidentProperty}>CASO:</Text>
                    <Text style={style.incidentValue}>{incident.title}</Text>

                    <Text style={style.incidentProperty}>VALOR:</Text>
                    <Text style={style.incidentValue}>
                        {Intl.NumberFormat('pt-BR', 
                            {
                            style : 'currency', 
                            currency: 'BRL'
                            }).format(incident.value)}
                    </Text>
                
                    <TouchableOpacity  style={style.detailsButton} onPress={()=>navigateToDetail(incident)}>
                        <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
             />

            

        </View>
    );
}