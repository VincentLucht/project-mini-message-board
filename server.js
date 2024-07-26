const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ! set view engine
app.set('view engine', 'ejs');

// ? allow access to req.body
app.use(express.urlencoded({ extended: true }));

let messageId = 0;
const messages = [
  {
    id: messageId++,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: messageId++,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.render('index', { messages });
})

app.get('/new', (req, res) => {
  res.render('form')
})

//* Handle the form submission
app.post('/new', (req, res) => {
  const { author, message } = req.body;
  messages.push({ id: messageId++, user: author, text: message, added: new Date() });
  
  res.redirect('/');
})

app.get('/:messageId', (req, res) => {
  const messageId = parseInt(req.params.messageId);
  const message = messages.find(msg => msg.id === messageId);
  
  if (message) {
    res.render('messageDetail', { message });
  } else {
    res.status(404).send('Message not found');
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});