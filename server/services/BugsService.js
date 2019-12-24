import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Bug", Bug);

class BugsService {
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
    let data = await _repository.findByIdAndUpdate(id, update);
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    if(data.closed == true) {
      throw new ApiError("Can not edit closed bug!", 400)
    }
    return data;
  }
  async deleteBug(id) {
    let data = await _repository.findByIdAndUpdate(id, { closed: true });
    if(!data){
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
}

const bugsService = new BugsService();
export default bugsService;
