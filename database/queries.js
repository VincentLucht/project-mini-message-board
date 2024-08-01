const pool = require('./pool');

async function getAllUsers() {
  const { rows } = await pool.query('SELECT * FROM users');
  return rows;
}

async function addUser(username, description) {
  await pool.query('INSERT INTO users (username, description) VALUES ($1, $2)', [username, description]);
}

async function getUser(id) {
  const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return user;
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
}