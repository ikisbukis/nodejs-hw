import createHttpError from "http-errors";
import { Notes } from "../models/note.js";

export const getNote = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Notes.findById(noteId);

  if(!note){
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const note = await Notes.create(req.body);
  req.status(201).json(note);
};

export const deleteNote = async (req, res) => {
  const {noteId} = req.params;
  const note = await Notes.findByIdAndDelete({_id:noteId,});

  if(!note){
    throw createHttpError(404, 'Note note found');
  }
  res.status(200).json(note);
};

export const updateNote =  async (req, res) => {
  const {noteId} = req.params;
  const note = await Notes.findByIdAndUpdate(
    {_id: noteId},
    req.body,
    {returnDocument: "after"},
  );

  if(!note) {
    throw createHttpError(404, 'Note not found');
  };

  res.status(200).json(note);
};
