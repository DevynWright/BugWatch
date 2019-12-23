import express from "express";
import bugService from "../services/BugService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAllBugs)
      .get("/:id", this.getBugsById)
      .post("", this.newBug)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAllBugs(req, res, next) {
    try {
      let data = await bugService.getAllBugs();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getBugsById(req, res, next) {
    try {
      let data = await bugService.getBugsById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async newBug(req, res, next) {
    try {
      let data = await bugService.newBug(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await bugService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await bugService.delete(req.params.id);
      return res.send("Successfully Deleted Bug");
    } catch (error) {
      next(error);
    }
  }
}
