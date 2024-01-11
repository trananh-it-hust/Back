import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const SkillsSchema = mongoose.Schema({
  idUser: ObjectId,
  title: String,
  info: String,
  description: String,
});
SkillsSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "";
    }
  });
  next();
});

const SkillsModel = mongoose.model("detail/Skills", SkillsSchema);

export default SkillsModel;
