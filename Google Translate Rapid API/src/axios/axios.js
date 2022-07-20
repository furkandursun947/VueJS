import axios from 'axios'


const api = axios.create({
    baseURL: "https://google-translate1.p.rapidapi.com/language/translate/v2/",
    headers:{
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'e1eb4e8c2cmsh9c35f6be9cb99b2p121baajsn5812114daa3b',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    
})


export default api;