import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  idUser: ObjectId,
  title: String,
  info: String,
  description: String,
  time: String,
  skills: String,
});
ProjectSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "";
    }
  });
  next();
});

const ProjectModel = mongoose.model("detail/Project", ProjectSchema);

export default ProjectModel;
