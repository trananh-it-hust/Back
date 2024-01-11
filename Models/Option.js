import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const OptionSchema = mongoose.Schema({
  idUser: ObjectId,
  Education: {
    type: Boolean,
    default: false,
  },
  Project: {
    type: Boolean,
    default: false,
  },
  Skills: {
    type: Boolean,
    default: false,
  },
  Courses: {
    type: Boolean,
    default: false,
  },
  Experience: {
    type: Boolean,
    default: false,
  },
});
OptionSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = false;
    }
  });
  next();
});

const OptionModel = mongoose.model("Option", OptionSchema);

export default OptionModel;
