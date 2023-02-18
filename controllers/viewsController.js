const Note = require("../models/noteModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getNotes = catchAsync(async (req, res, next) => {
  // GET NOTES FROM COLLECTION
  const notes = await Note.find();

  // BUILD TEMPLATE

  // RENDER THE TEMPLATE
  res.status(200).render("overview", {
    title: "All Notes",
    notes,
  });
});
