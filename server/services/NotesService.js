import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getNotesById(id){
    let data = await _repository.findById(id);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async getBugsNotes(BugId){
    let data = await _repository.find({ bug: BugId });
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async create(rawData){
    let data = await _repository.create(rawData);
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete(id);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
}

const notesService = new NotesService();
export default notesService;
