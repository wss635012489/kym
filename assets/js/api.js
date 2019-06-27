import axios from 'axios';
const baseUrl = 'http://120.78.82.222:4000/kym-web-cat'; //正式

axios.defaults.baseURL = baseUrl;

export function saveCooperativePartne(data){
    return axios.request({
        url:'/cooperativePartner/saveCooperativePartner',
        method: 'post', 
        data: data
    })
}