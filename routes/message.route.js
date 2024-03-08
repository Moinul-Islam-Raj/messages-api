const express = require('express');
const router = express.Router();

const {
    getMessages,
    addMessage,
    deleteAllMessage,
    getMessage,
    updateMessage,
    deleteMessage
} = require('../controllers/message.controller.js')

router.route('/')
.get(getMessages)
.post(addMessage)
.delete(deleteAllMessage);

router.route('/:id')
.get(getMessage)
.put(updateMessage)
.delete(deleteMessage);

module.exports = router