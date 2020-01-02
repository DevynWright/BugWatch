import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService"

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAllBugs)
      .get("/:id", this.getBugsById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.newBug)
      .put("/:id", this.edit)
      .delete("/:id", this.deleteBug)
  }

  async getAllBugs(req, res, next) {
    try {
      let data = await bugsService.getAllBugs();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getBugsById(req, res, next) {
    try {
      let data = await bugsService.getBugsById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.getNotesByBugId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async newBug(req, res, next) {
    try {
      let data = await bugsService.newBug(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await bugsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteBug(req, res, next) {
    try {
      await bugsService.deleteBug(req.params.id);
      return res.send("Successfully Deleted Bug");
    } catch (error) {
      next(error);
    }
  }
}
