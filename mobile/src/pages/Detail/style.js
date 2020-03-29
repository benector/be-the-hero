import { StyleSheet} from 'react-native';
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

    incident : {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty : {
        fontSize :14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue : {
        marginTop: 8,
        fontSize: 15,
        color: '#737380', 
    },

    contactBox : {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },

    heroTitle : {
        fontWeight: 'bold',
        fontSize : 20,
        color: '#13131A',
        lineHeight: 30,
    },

    heroDescription : {
        fontSize : 15,
        color: '#737380',
        marginTop : 16,
    },

    actions : {
        marginTop : 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action : {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center', /**alinha o texto   */
    },

    actionText : {
        color: '#FFF',
        fontSize : 15,
        fontWeight : 'bold',
    }
});