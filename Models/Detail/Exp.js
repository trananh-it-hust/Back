import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ExpSchema = mongoose.Schema({
  idUser: ObjectId,
  title: String,
  info: String,
  description: String,
  time: String,
  skills: String,
});
ExpSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "";
    }
  });
  next();
});

const ExpModel = mongoose.model("detail/Exp", ExpSchema);

export default ExpModel;
