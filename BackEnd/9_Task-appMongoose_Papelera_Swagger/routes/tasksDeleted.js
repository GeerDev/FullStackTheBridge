const express = require('express');
const TaskDeletedController = require('../controllers/TaskDeletedController');
const router = express.Router();

router.get('/:_id',TaskDeletedController.create)

module.exports = router;