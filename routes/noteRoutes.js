const express = require("express");
const { route } = require("../app");

const notesController = require("../controllers/notesController");

const router = express.Router();

router
  .route("/")
  .post(notesController.createNote)
  .get(notesController.getAllNotes);

router
  .route("/:id")
  .get(notesController.getNote)
  .patch(notesController.editNote)
  .delete(notesController.deleteNote);

module.exports = router;
