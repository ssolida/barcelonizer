const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());  // Autorise toutes les origines

app.use(express.json());

const blacklistSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: Object,
  sarcasticTitle: String,
});

const Blacklist = mongoose.model('Blacklist', blacklistSchema);

app.get('/', (req, res) => {
  console.log('➡️ Requête GET / reçue');
  res.send('👋 Bienvenue sur l’API Barcelonizer');
});
console.log('✅ Route GET / enregistrée');

app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test OK ✅' });
});
console.log('✅ Route GET /api/test enregistrée');

app.post('/api/blacklist', async (req, res) => {
  try {
    const item = new Blacklist(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: 'Erreur lors de l’ajout' });
  }
});

app.get('/api/blacklist', async (req, res) => {
  console.log('✅ Route GET /api/blacklist enregistrée');
  try {
    const items = await Blacklist.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération' });
  }
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connecté'))
  .catch((err) => console.error('❌ Erreur MongoDB :', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});