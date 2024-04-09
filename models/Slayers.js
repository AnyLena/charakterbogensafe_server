import mongoose from "mongoose";

const SlayersSchema = new mongoose.Schema({
  allgemeines: {
    name: {
      required: true,
      type: String,
    },
    beschreibung: {
      type: String,
    },
    volk: {
      required: true,
      type: String,
    },
    klasse: {
      required: true,
      type: String,
    },
    volksbonus: {
      required: true,
      type: String,
    },
    klassenbonus: {
      required: true,
      type: String,
    },
    volksfaehigkeiten: {
      required: true,
      type: String,
    },
  },
  attribute: {
    koerper: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    agilitaet: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    geist: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
  },
  eigenschaften: {
    staerke: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    haerte: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    bewegung: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    geschick: {
      basis: {
        required: true,
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
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
    aura: {
      basis: {
        required: true,
        default: 0,
        type: Number,
      },
      aktuell: {
        default: 0,
        type: Number,
      },
    },
  },
  werte: {
    lp: {
      required: true,
      default: 0,
      type: Number,
    },
    tp: {
      required: true,
      default: 0,
      type: Number,
    },
    ep: {
      required: true,
      default: 0,
      type: Number,
    },
    tl: {
      required: true,
      default: 0,
      type: Number,
    },
    stufe: {
      required: true,
      default: 1,
      type: Number,
    },
    schaden: {
      required: true,
      default: 0,
      type: Number,
    },
  },
  werteGamma: {
    degeneration: {
      required: true,
      default: 0,
      type: Number,
    },
    cyberpunkte: {
      required: true,
      default: 0,
      type: Number,
    },
    mutation: {
      required: true,
      default: 0,
      type: Number,
    },
  },
  ruestung: [
    {
      ruestungName: {
        required: true,
        default: "",
        type: String,
      },
      ruestungPa: {
        required: true,
        default: 0,
        type: Number,
      },
      ruestungBes: {
        type: String,
      },
    },
  ],
  waffen: [
    {
      waffeName: {
        required: true,
        default: "",
        type: String,
      },
      waffeWb: {
        type: Number,
      },
      waffeRw: {
        type: Number,
      },
      waffeMw: {
        type: Number,
      },
      waffeMun: {
        type: String,
      },
      waffeModi: {
        type: String,
      },
      waffeBes: {
        type: String,
      },
    },
  ],
  ausruestung: [
    {
      ausruestungName: {
        required: true,
        default: "",
        type: String,
      },
    },
  ],
  geld: {
    gold: {
      type: Number,
      required: true,
      default: 0,
    },
    silber: {
      type: Number,
    },
    kupfer: {
      type: Number,
    },
  },
  talente: [
    {
      talentName: {
        required: true,
        type: String,
      },
      talentRang: {
        required: true,
        type: Number,
      },
      talentRangMax: {
        required: true,
        type: Number,
      },
      talentEffekt: {
        required: true,
        type: String,
      },
    },
  ],
  magie: [
    {
      magieName: {
        required: true,
        default: "",
        type: String,
      },
      magieKb: {
        required: true,
        default: "",
        type: String,
      },
      magieAdWd: {
        required: true,
        default: "",
        type: String,
      },
      magieDist: {
        required: true,
        default: "",
        type: String,
      },
      magieAkz: {
        required: true,
        default: "",
        type: String,
      },
      magieEffekt: {
        required: true,
        default: "",
        type: String,
      },
    },
  ],
  sonstiges: [
    {
      sonstigesBeschreibung: {
        type: String,
      },
    },
  ],
  system: {
    type: String,
    enum: ['gammaslayers', 'dungeonslayers'],
    required: true
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
});

const Slayers = mongoose.model("Slayers", SlayersSchema);

export default Slayers;
