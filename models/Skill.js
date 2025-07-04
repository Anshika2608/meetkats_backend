const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  }
});

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
