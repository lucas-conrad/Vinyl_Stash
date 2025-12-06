const discogs = require('../services/discogs');

exports.searchDiscogs = async (req, res) => {
    const query = req.query.q;
    
    
    const params = {
        q: query,
        token: process.env.DISCOGS_TOKEN,
        type: 'release',
    };
    try {
        const response = await discogs.get('/database/search', {params});

        res.json(response.data.results);
    } catch (error) {
        console.error('Error searching Discogs:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ message: 'Search Failed' });
    }
}
