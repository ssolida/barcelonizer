const mongoose = require('mongoose');

const BlacklistSchema = new mongoose.Schema({
    name: String,
    category: String,
    location: Object,
    sarcasticTitle: String,
    reasonToAvoid: String,
});

module.exports = mongoose.model('Blacklist', BlacklistSchema, 'blacklist');