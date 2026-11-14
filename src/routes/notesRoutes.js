import { Router } from "express";
import { createNote, deleteNote, getNote, getNoteById, updateNote } from "../controllers/notesControllers.js";

const router = Router();

router.get("/notes", getNote);
router.get("/notes/:noteId", getNoteById);
router.post("/notes", createNote);
router.delete("/notes/:noteId", deleteNote);
router.patch("/notes/:noteId", updateNote);

export default router;
