import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Note", Note);

class NotesService {
  async editNotesByBugId(id){
    let data = await _repository.findByIdAndUpdate(id);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async getNotesByBugId(id){
    let data = await _repository.find({ bug: id });
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
    let data = await _repository.findByIdAndDelete(id);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
}

const notesService = new NotesService();
export default notesService;
