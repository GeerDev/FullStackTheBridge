const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/', UserController.register);
router.get('/', UserController.getUser);
router.post('/sendEmail', UserController.sendEmail);

module.exports = router;