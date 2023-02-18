const Notes = require("../models/noteModel");

exports.createNote = async (req, res) => {
  const note = await Notes.create(req.body);

  res.status(200).json({
    message: "success",
    data: { note },
  });
};

/**
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {Object} - JSON object containing all notes from the collection
 *                    with a success message and status code of 200
 */
exports.getAllNotes = async (req, res, next) => {
  // Retrieve all notes from the "Notes" collection and select only the "note" field
  const notes = await Notes.find().select("note");

  // Send a JSON response with the notes and a success message
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
