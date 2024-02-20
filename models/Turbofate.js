import mongoose from "mongoose";

const TurboFateSchema = new mongoose.Schema({
  allgemeines: {
    name: {
      required: true,
      type: String,
    },
    beschreibung: {
      required: true,
      type: String,
    },
    erholung: {
      required: true,
      type: Number,
    },
  },
  aspekt: {
    konzept: {
      required: true,
      type: String,
    },
    motivation: {
      required: true,
      type: String,
    },
    persoenlich: {
      required: true,
      type: String,
    },
    geteilt: {
      required: true,
      type: String,
    },
    zusatz: {
      type: String,
    },
  },
  methoden: {
    flink: {
      required: true,
      type: Number,
    },
    kraftvoll: {
      required: true,
      type: Number,
    },
    scharfsinnig: {
      required: true,
      type: Number,
    },
    sorgfaeltig: {
      required: true,
      type: Number,
    },
    tollkuehn: {
      required: true,
      type: Number,
    },
    tueckisch: {
      required: true,
      type: Number,
    },
  },
  stunts: [
    {
      stuntName: {
        required: true,
        type: String,
      },
      stuntBeschreibung: {
        required: true,
        type: String,
      },
    },
  ],
  stress: {
    eins: {
      required: true,
      type: Boolean,
    },
    zwei: {
      required: true,
      type: Boolean,
    },
    drei: {
      required: true,
      type: Boolean,
    },
  },
  konsequenzen: {
    leicht: {
      type: String,
    },
    mittel: {
      type: String,
    },
    schwer: {
      type: String,
    },
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    // required: true
  } 
});

const Turbofate = mongoose.model("Turbofate", TurboFateSchema);

export default Turbofate;
