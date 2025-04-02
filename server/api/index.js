const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.log(err));

// Schéma MongoDB pour Blacklist
const blacklistSchema = new mongoose.Schema({
    name: String,
    category: String,
    location: { lat: Number, lng: Number },
    sarcasticTitle: String,
    reasonToAvoid: String
});
const Blacklist = mongoose.model('blacklist', blacklistSchema);

// API : Récupérer tous les lieux
app.get('/api/blacklist', async (req, res) => {
    const places = await Blacklist.find();
    res.json(places);
});

// API : Ajouter un lieu (pour tester)
app.post('/api/blacklist', async (req, res) => {
    const place = new Blacklist(req.body);
    await place.save();
    res.json(place);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur sur port ${PORT}`));