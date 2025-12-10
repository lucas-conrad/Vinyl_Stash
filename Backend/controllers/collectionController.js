const Album = require('../models/Album');

exports.getCollection = async (req, res) => {
    try {
        const userId = req.session.userId?.id || req.session.userId;
        if (!userId) {
            return res.status(401).json({ error: 'Not Logged In' });
        }
        const albums = await Album.find({user: userId});
        res.status(200).json(albums);
    } catch (error) {
        console.error('Error fetching collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addToCollection = async (req, res) => {
    const { discogsId, title, artist, year, thumb, genres, styles } = req.body;

    try{
        const existingAlbum = await Album.findOne({ 
            discogsId,
            user: req.session.userId?.id    
         });
        if (!req.session.userId) {
            return res.status(401).json({ error: 'Not Logged In' });
        }
        if (existingAlbum) {
            return res.status(400).json({ message: 'Album already in collection' });
        }
        const userId = req.session.userId?.id || req.session.userId;
        const newAlbum = new Album({
            user: userId,
            discogsId,
            title,
            artist,
            year,
            thumb,
            genres,
            styles
        });

        const savedAlbum = await newAlbum.save();
        res.status(201).send(savedAlbum);
    }
    catch(error){
        console.error('Error adding album to collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.removeFromCollection = async (req, res) => {
    try{
        const userId = req.session.userId?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Not Logged In' });
        }
        const removed = await Album.findOneAndDelete({
            _id: req.params.id,
            user: userId
        });
        if (!removed) {
            return res.status(404).json({ message: 'Album not found in your collection' });
        }

        res.json({ message: 'Album removed from collection', album: removed });
    }
    catch(error){
        console.error('Error removing album from collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


    