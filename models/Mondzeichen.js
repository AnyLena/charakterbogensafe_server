import mongoose from "mongoose";

const MondzeichenSchema = new mongoose.Schema({
  mondName: {
    type: String,
    required: true,
  },
  mondBeschreibung: {
    type: String,
    required: true,
  },
  mondVerstaerkt: {
    type: String,
    required: true,
  },
  mondGeheim: {
    type: String,
    required: true,
  },
});

const Mondzeichen = mongoose.model("Mondzeichen", MondzeichenSchema);

export default Mondzeichen;
