const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  note: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

notesSchema.pre(/^find/, function (next) {
  this.select("note createdAt");
  next();
});

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;
