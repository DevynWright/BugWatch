import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAllBugs() {
    return await _repository.find({});
  }
  async getBugsById(id){
    let data = await _repository.findById(id);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async newBug(rawData){
    let data = await _repository.create(rawData);
    return data;
  }
  async edit(id, update){
    let data = await _repository.findOneAndUpdate({id: id}, update);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({id: id});
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
}

const bugService = new BugService();
export default bugService;
