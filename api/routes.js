var express = require('express');
var router = express.Router();
const https = require('https');

//access token è il token di accesso a lunga durata, gettato manualmente e immesso nel codice; esso viene refreshato dal codice in via automatica
const access_token = 'IGQVJYaFg1Yk9GNko0V29VeE9zdl9hWmR3OXJZANVk0WjNhSTFmajRHeHpUSjc2RDRKcnhRYk9ueUFrU2RDdldSWVBMVkpUR3VqNWdxbmlVZAFFtNzVwR1BoUEZAjRUw3M196SkpjQTJ3';
const Refresh_URL = 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token='+access_token;
const URL_GetUserImages = 'https://graph.instagram.com/me/media?fields=id,media_url&access_token='+access_token;
//const secret = 'aded4623be5c6a2ee1e34105aadad2e9';


router.get('/getInstagramToken', (req, res) => {
    try{
        const req = https.get(Refresh_URL, resp => {
            let data = '';
            resp.on('data', chunk => {
                data += chunk;
            });
            resp.on('end', chunk => {
                data = JSON.parse(data);
                res.json(data);
            });
        });
    }catch(e){
        console.error(e.status);
    }
});

router.get('/getInstagramImages', (req, res) => {
    try{
        const req = https.get(URL_GetUserImages, resp => {
            let rawJson = '';
            let data = '';
            let urls = [''];
            resp.on('data', chunk => {
                rawJson += chunk;
            });
            resp.on('end', chunk => {
                let urls = '';
                rawJson = JSON.parse(rawJson);
                res.json(rawJson ? rawJson : 'success: false').status(rawJson ? 200 : 403);
            });
        });
    }catch(e){

    }
});

//qui fai il get dei dati da mongo per visualizzare il token e se c'è bisogno di refresharlo



module.exports = router;