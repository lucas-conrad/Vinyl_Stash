const axios = require('axios');

const discogsAPI = axios.create({
    baseURL: 'https://api.discogs.com/',
    headers: {
        "User-Agent": "VinylStashApp/1.0",
        "Authorization": `Discogs token=${process.env.DISCOGS_TOKEN}`
    }
});

module.exports = discogsAPI;