import mongoose from "mongoose";

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PlayerSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: {
    required: true,
    type: String,
    match: [emailRegEx, "Bitte E-Mail-Adresse angeben"],
  },
  password: { required: true, type: String }
});

const Player = mongoose.model("Player", PlayerSchema);

export default Player;
