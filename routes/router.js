const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/new', controller.newUserGET);
router.post('/new', controller.newUserPOST);

router.get('/:id', controller.openUserDetailsGET);

module.exports = router;