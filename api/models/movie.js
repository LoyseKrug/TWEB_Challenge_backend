const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
    vote_count: { type: Number },
    video: { type: Boolean},
    title: { type: String },
    release_date: { type: String },
    vote_average: { type: Number },
    popularity: { type: Number },
    poster_path: { type: String },
    original_language: { type: String },
    original_title: { type: String },
    backdrop_path: { type: String },
    adult: { type: Boolean },
    overview: { type: String },
    tmdb_id: { type: Number },
    genres: [{type: String }],
});

// Export the model
module.exports = mongoose.model('Movie', MovieSchema);