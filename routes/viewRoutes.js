const express = require("express");
const { route } = require("../app");

const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.route("/").get(viewsController.getNotes);

// router.route("/:id").get(notesController.getNote);

module.exports = router;
