import mongoose from "mongoose";

const MeisterschaftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schwelle: {
    type: Number,
    required: true,
  },
  gruppe: {
    type: String,
    required: true,
  },
  beschreibung: {
    type: String,
    required: false,
  },
  fertigkeiten: [
    {
      type: String,
      required: true,
    },
  ],
});

const Meisterschaft = mongoose.model("Meisterschaft", MeisterschaftSchema);

export default Meisterschaft;
