const mongoose = require('mongoose');
const Blacklist = require('./models/Blacklist');

module.exports = async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URI);
        }

        const all = await Blacklist.find();
        res.status(200).json(all);
    } catch (err) {
        res.status(500).json({ error: "Mongo error", details: err.message });
    }
};