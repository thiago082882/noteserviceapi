const express = require("express");
const { getNote, createNote,deleteNote,updateNote } = require("../controller/noteController");
const auth = require("../middlewares/auth");
const noteRouters = express.Router();

noteRouters.get("/", auth ,getNote);

noteRouters.post("/", auth ,createNote);

noteRouters.delete("/:id", auth ,deleteNote);

noteRouters.put("/:id", auth ,updateNote);

module.exports = noteRouters;