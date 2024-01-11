import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const EduSchema = mongoose.Schema({
  idUser: ObjectId,
  title: String,
  info: String,
  description: String,
  time: String,
  skills: String,
});
EduSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "";
    }
  });
  next();
});

const EduModel = mongoose.model("detail/Education", EduSchema);

export default EduModel;
