const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connecté"))
    .catch(err => console.error("❌ MongoDB erreur :", err));

// Test route
app.get('/ping', (req, res) => {
    res.json({ pong: true });
});

// Blacklist route
const Blacklist = require('./models/Blacklist'); // adapte le chemin
app.get('/blacklist', async (req, res) => {
    const all = await Blacklist.find();
    res.json(all);
});

module.exports = app;
module.exports.handler = serverless(app);