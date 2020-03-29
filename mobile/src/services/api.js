import axios from 'axios';


const api = axios.create({
    baseURL : 'http://192.168.1.9:3333' /*se rodando no cel o localhost não funciona, então coloca o IP da máquina */
});

export default api;
