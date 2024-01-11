import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const DetailUserSchema = mongoose.Schema({
  idUser: ObjectId,
  userName: String,
  birthday: String,
  email: String,
  Name: String,
  headline: String,
  current: String,
  city: String,
  avatar: String,
  background: String,
});
DetailUserSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "Default";
    }
  });
  next();
});

const DetailUserModel = mongoose.model("detailUser", DetailUserSchema);

export default DetailUserModel;
