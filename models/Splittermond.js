import mongoose from "mongoose";

const SplittermondSchema = new mongoose.Schema({
  allgemeines: {
    name: {
      default: "–",
      type: String,
    },
    ausbildung: {
      type: String,
    },
    kultur: {
      default: "–",
      type: String,
    },
    abstammung: {
      default: "–",
      type: String,
    },
    rasse: {
      default: "–",
      type: String,
    },
    geburtsort: {
      default: "–",
      type: String,
    },
    schwaechen: {
      default: "–",
      type: String,
    },
    erscheinung: {
      default: "–",
      type: String,
    },
    erfahrungspunkte: {
      aktuell: {
        type: Number,
        default: 0,
      },
      basis: {
        type: Number,
        default: 15,
      },
    },
    heldengrad: {
      type: Number,
      default: 1,
    },
  },
  attribute: {
    ausstrahlung: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    beweglichkeit: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    intuition: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    kostitution: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    mystik: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    staerke: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    verstand: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    willenskraft: {
      basis: {
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
  },
  fertigkeiten: {
    akrobatik: {
      default: 0,
      type: Number,
    },
    alchemie: {
      default: 0,
      type: Number,
    },
    anführen: {
      default: 0,
      type: Number,
    },
    arkanekunde: {
      default: 0,
      type: Number,
    },
    athletik: {
      default: 0,
      type: Number,
    },
    darbietung: {
      default: 0,
      type: Number,
    },
    diplomatie: {
      default: 0,
      type: Number,
    },
    edelhandwerk: {
      default: 0,
      type: Number,
    },
    empathie: {
      default: 0,
      type: Number,
    },
    entschlossenheit: {
      default: 0,
      type: Number,
    },
    fingerfertigkeit: {
      default: 0,
      type: Number,
    },
    geschichtemythen: {
      default: 0,
      type: Number,
    },
    handwerk: {
      default: 0,
      type: Number,
    },
    heilkunde: {
      default: 0,
      type: Number,
    },
    heimlichkeit: {
      default: 0,
      type: Number,
    },
    jadtkunst: {
      default: 0,
      type: Number,
    },
    laenderkunde: {
      default: 0,
      type: Number,
    },
    naturkunde: {
      default: 0,
      type: Number,
    },
    redegewandtheit: {
      default: 0,
      type: Number,
    },
    schloesserfallen: {
      default: 0,
      type: Number,
    },
    schwimmen: {
      default: 0,
      type: Number,
    },
    seefahrt: {
      default: 0,
      type: Number,
    },
    strassenkunde: {
      default: 0,
      type: Number,
    },
    tierfuehrung: {
      default: 0,
      type: Number,
    },
    ueberleben: {
      default: 0,
      type: Number,
    },
    wahrnehmung: {
      default: 0,
      type: Number,
    },
    zaehigkeit: {
      default: 0,
      type: Number,
    },
  },
  meisterschaften: [
    {
      meisterschaftName: {
        default: "–",
        type: String,
      },
      meisterschaftFertigkeit: {
        default: "–",
        type: String,
      },
      meisterschaftWirkung: {
        default: "–",
        type: String,
      },
    },
  ],
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
});

const Splittermond = mongoose.model("Splittermond", SplittermondSchema);

export default Splittermond;
