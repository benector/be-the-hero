import React from 'react';
import { View, Image,Text,  TouchableOpacity , Linking} from 'react-native';
import style from './style';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';/*USE ROUTE SERVE PRA PEGAR INFO ESPECIFICA DA PAGINA ATUAL */

import * as MailComposer from 'expo-mail-composer';

export default function Detail(){

    const navigation = useNavigation();/**useHistory da web */
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style : 'currency', currency: 'BRL'}).format(incident.value)}`;
    function navigateBack(){
        navigation.goBack(); //o mesmo nome do arquivo de rota
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email], 
            body : message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text={message}`);
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name = 'arrow-left' size={28} color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
            <Text style={style.incidentProperty, {marginTop:0}}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name}</Text>
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
            </View>
            <View style={style.contactBox}>
                    <Text style={style.heroTitle}>Salve o dia!</Text>
                    <Text style={style.heroTitle}>Seja o herói desse caso.</Text>

                    <Text style={style.heroDescription}>Entre em contato</Text>
                    <View style={style.actions}> 
                        <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                            <Text style={style.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.action} onPress={sendMail}>
                            <Text style={style.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    
        </View>
    );
}