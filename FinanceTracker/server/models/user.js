//This will define how a user is stored in MongoDB.

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true // adds createdAt and updatedAt
});

const User = mongoose.model("User", userSchema);

export default User;
