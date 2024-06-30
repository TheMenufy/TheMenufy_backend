const express = require('express');
const Message = require('../models/Message'); 
const Conversation = require('../models/Conversation');
const router = express.Router();

router.get('/conversations/:userId', async (req, res) => {
  try {
    const conversations = await Conversation.find({ participants: req.params.userId }).populate('participants');
    res.json(conversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).send('Error fetching conversations');
  }
});
router.post('/conversations', async (req, res) => {
  try {
    const { participants } = req.body;

    // Check if a conversation with the same participants already exists
    let existingConversation = await Conversation.findOne({ participants: { $all: participants, $size: participants.length } });

    if (existingConversation) {
      res.status(200).json(existingConversation); // Return the existing conversation
    } else {
      const newConversation = new Conversation({ participants });
      await newConversation.save();
      res.status(201).json(newConversation); // Return the newly created conversation
    }
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).send('Error creating conversation');
  }
});
 
router.get('/messages/:conversationId', async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.conversationId }).sort('createdAt'); // Sort messages by createdAt
    res.json(messages);
  } catch (error) {
    res.status(500).send('Error fetching messages');
  }
});
  module.exports = router;
