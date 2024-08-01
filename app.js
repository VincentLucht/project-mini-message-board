const express = require('express');
const app = express();
require('dotenv').config();

const asyncHandler = require('./asyncHandler');
const db = require('./database/queries');
const router = require('./routes/router');

app.set('view engine', 'ejs'); //? set view engine
app.use(express.urlencoded({ extended: true })); //? allow access to req.body

app.get('/', asyncHandler(async(req, res) => { 
  const allUsers = await db.getAllUsers();
  res.render('index', { users: allUsers });
}))

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});