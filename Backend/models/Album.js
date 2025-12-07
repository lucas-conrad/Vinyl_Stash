const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    discogsId: Number,
    title: String,
    artist: String,
    year: Number,
    thumb: String,
    genres: [String],
    styles: [String],
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;