const mongoose = require('mongoose');

const PeopleWithQuestions = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  questionOrConcern: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model('PeopleWithQuestions', PeopleWithQuestions);
