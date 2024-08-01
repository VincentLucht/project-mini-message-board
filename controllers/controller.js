const asyncHandler = require("../asyncHandler");
const db = require("../database/queries");

exports.newUserGET = asyncHandler((req, res) => {
  res.render('form');
});
exports.newUserPOST = asyncHandler(async(req, res) => {
  const { username, description } = req.body;
  await db.addUser(username, description);
  res.redirect('/');
});

exports.openUserDetailsGET = asyncHandler(async(req, res) => {
  const { id } = req.params;
  const { rows } = await db.getUser(id);
  const user = rows[0];
  res.render('messageDetail', { user: user });
});