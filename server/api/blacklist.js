const mongoose = require('mongoose');
const Blacklist = require('./models/Blacklist');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connecté"))
    .catch((err) => console.error("❌ MongoDB erreur :", err));

module.exports = async (req, res) => {
    try {
        const all = await Blacklist.find();
        res.status(200).json(all);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur", details: err.message });
    }
};