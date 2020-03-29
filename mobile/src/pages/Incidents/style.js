import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex: 1, /*ocupa tamanho inteiro da tela*/
        paddingHorizontal : 24,/*so existe no react native - padding nas laterais */
        paddingTop: Constants.statusBarHeight + 20, /*padding top de 20 */
    },
    header :{
        flexDirection: 'row', /*por padrão é column */
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold : {
        fontWeight: 'bold',
    },

    title: {
        fontSize :30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description : {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList :{
        marginTop: 32,
    },

    incident : {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },

    incidentProperty : {
        fontSize :14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue : {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380', 
    },
  
    detailsButton : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText : {
        color : '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }


});