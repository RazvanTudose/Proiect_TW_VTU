const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Initializarea aplicatiei
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conectarea la baza de date MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectat la MongoDB!'))
  .catch(err => console.log('Eroare conectare MongoDB: ', err));

// Schema pentru activitati
const activitySchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    description: String,
    date: { type: Date, required: true },
    duration: { type: Number, required: true } 
});

// Schema pentru feedback
const feedbackSchema = new mongoose.Schema({
    activityCode: { type: String, required: true },
    feedback: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Modelele pentru MongoDB
const Activity = mongoose.model('Activity', activitySchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Ruta pentru a adauga o activitate
app.post('/api/activities', async (req, res) => {
    const { code, description, date, duration } = req.body;
    try {
        const activity = new Activity({ code, description, date, duration });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: 'Eroare la salvarea activității' });
    }
});

// Ruta pentru a obtine lista de activitati
app.get('/api/activities', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obținerea activităților' });
    }
});

// Ruta pentru a adauga un feedback
app.post('/api/feedback', async (req, res) => {
    const { activityCode, feedback } = req.body;
    try {
        const newFeedback = new Feedback({ activityCode, feedback });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(400).json({ message: 'Eroare la salvarea feedback-ului' });
    }
});

// Ruta pentru a obtine feedback-ul pentru o activitate
app.get('/api/feedback/:activityCode', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ activityCode: req.params.activityCode });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obținerea feedback-ului' });
    }
});

// fisierele statice din folderul frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// index.html ca fisier principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Pornirea serverului pe portul 5000
app.listen(5000, () => {
    console.log('Serverul rulează pe http://localhost:5000');
});
