const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  studentId: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  isAwesome: Boolean,

  favoriteThings: Array,

  birthday: {
    type: Date,
    default: Date.now
  },

  bio: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;