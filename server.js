const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());


// Middleware to parse JSON
app.use(express.json());

// Sample in-memory quotes (use MongoDB for persistence in production)
let quotes = [
  { id: 1, text: "Climb the mountains of doubt, and you’ll find valleys of clarity.", author: "balkishan" },
  { id: 2, text: "In stillness, the heart hears its true direction.", author: "balkishan" },
  { id: 3, text: "The echo of your effort lingers longer than the sound of your voice.", author: "balkishan" },
  { id: 4, text: "Dreams are the seeds; determination, the soil.", author: "balkishan" },
  { id: 5, text: "The universe doesn’t owe you answers; it gifts you questions.", author: "balkishan" },
  { id: 6, text: "Each step forward writes a new chapter in your journey.", author: "balkishan" },
  { id: 7, text: "Life is a collection of moments, not years.", author: "balkishan" },
  { id: 8, text: "The courage to begin is the silent victory.", author: "balkishan" },
  { id: 9, text: "The light you seek exists within the shadow of your doubts.", author: "balkishan" },
  { id: 10, text: "Your ambition is a fire, but only your actions will keep it burning.", author: "balkishan" },
  { id: 11, text: "Time bends for those who understand its dance.", author: "balkishan" },
  { id: 12, text: "The truth of today is the question of tomorrow.", author: "balkishan" },
  { id: 13, text: "Let your purpose echo louder than your excuses.", author: "balkishan" },
  { id: 14, text: "In the quietest moments, the loudest dreams are born.", author: "balkishan" },
  { id: 15, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "balkishan" },
  { id: 16, text: "The heart knows the way; the mind only learns to follow.", author: "balkishan" },
  { id: 17, text: "Fall often, rise stronger, and you will create the path.", author: "balkishan" },
  { id: 18, text: "Fear is the illusion of what could be; courage is the truth of what will be.", author: "balkishan" },
  { id: 19, text: "The scars you carry are the footprints of your strength.", author: "balkishan" },
  { id: 20, text: "Life doesn't break you; it molds you into something new.", author: "balkishan" },
];

// Routes

// Get all quotes
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// Get a single quote by ID
app.get('/api/quotes/:id', (req, res) => {
  const quote = quotes.find(q => q.id == req.params.id);
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).send('Quote not found');
  }
});

// Add a new quote
app.post('/api/quotes', (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).send('Both text and author are required');
  }

  const newQuote = { id: quotes.length + 1, text, author };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// Delete a quote by ID
app.delete('/api/quotes/:id', (req, res) => {
  const quoteIndex = quotes.findIndex(q => q.id == req.params.id);
  if (quoteIndex === -1) {
    return res.status(404).send('Quote not found');
  }

  quotes.splice(quoteIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
