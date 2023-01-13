const Notes = require("../models/noteModel");

exports.createNote = async (req, res) => {
  const note = await Notes.create(req.body);

  res.status(200).json({
    message: "success",
    data: { note },
  });
};

exports.getAllNotes = async (req, res, next) => {
  const notes = await Notes.find().select("note");

  res.status(200).json({
    message: "success",
    data: { notes },
  });
};

exports.getNote = async (req, res, next) => {
  const note = await Notes.findById(req.params.id);

  res.status(200).json({
    message: "success",
    data: { note },
  });
};

exports.editNote = async (req, res, next) => {
  const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    message: "success",
    data: { updatedNote },
  });
};

exports.deleteNote = async (req, res, next) => {
  await Notes.findByIdAndDelete(req.params.id);

  res.status(204).json({});
};
