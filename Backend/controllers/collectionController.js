const Album = require('../models/Album');

exports.getCollection = async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (error) {
        console.error('Error fetching collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addToCollection = async (req, res) => {
    const { discogsId, title, artist, year, thumb, genres, styles } = req.body;

    try{
        const existingAlbum = await Album.findOne({ discogsId });
        if (existingAlbum) {
            return res.status(400).json({ message: 'Album already in collection' });
        }
        const newAlbum = new Album({
            discogsId,
            title,
            artist,
            year,
            thumb,
            genres,
            styles
        });

        await newAlbum.save();
        res.status(201).json({ message: 'Album added to collection', album: newAlbum });
    }
    catch(error){
        console.error('Error adding album to collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.removeFromCollection = async (req, res) => {
    try{
        const removed = await Album.findByIdAndDelete(req.params.id);
        if(!removed){
            return res.status(404).json({ message: 'Album not found in collection' });
        }

        res.json({ message: 'Album removed from collection', album: removed });
    }
    catch(error){
        console.error('Error removing album from collection:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


    