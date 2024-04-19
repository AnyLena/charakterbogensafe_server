import mongoose from "mongoose";

const SplittermondSchema = new mongoose.Schema({
  allgemeines: {
    name: {
      default: "–",
      type: String,
    },
    ausbildung: {
      default: "–",
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
    konstitution: {
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
    groessenklasse: {
      default: 0,
      type: Number,
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
    anfuehren: {
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
    jagdkunst: {
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
  magieschulen: {
    bannmagie: {
      default: 0,
      type: Number,
    },
    beherrschungsmagie: {
      default: 0,
      type: Number,
    },
    bewegungsmagie: {
      default: 0,
      type: Number,
    },
    erkenntnismagie: {
      default: 0,
      type: Number,
    },
    felsmagie: {
      default: 0,
      type: Number,
    },
    feuermagie: {
      default: 0,
      type: Number,
    },
    heilungsmagie: {
      default: 0,
      type: Number,
    },
    illusionsmagie: {
      default: 0,
      type: Number,
    },
    kampfmagie: {
      default: 0,
      type: Number,
    },
    lichtmagie: {
      default: 0,
      type: Number,
    },
    naturmagie: {
      default: 0,
      type: Number,
    },
    schattenmagie: {
      default: 0,
      type: Number,
    },
    schicksalsmagie: {
      default: 0,
      type: Number,
    },
    schutzmagie: {
      default: 0,
      type: Number,
    },
    staerkungsmagie: {
      default: 0,
      type: Number,
    },
    todesmagie: {
      default: 0,
      type: Number,
    },
    verwandlungsmagie: {
      default: 0,
      type: Number,
    },
    wassermagie: {
      default: 0,
      type: Number,
    },
    windmagie: {
      default: 0,
      type: Number,
    },
  },
  kampffertigkeiten: {
    handgemenge: {
      default: 0,
      type: Number,
    },
    hiebwaffen: {
      default: 0,
      type: Number,
    },
    kettenwaffen: {
      default: 0,
      type: Number,
    },
    klingenwaffen: {
      default: 0,
      type: Number,
    },
    stangenwaffen: {
      default: 0,
      type: Number,
    },
    schusswaffen: {
      default: 0,
      type: Number,
    },
    wurfwaffen: {
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
  kampfmeisterschaften: [
    {
      kampfmeisterschaftName: {
        default: "–",
        type: String,
      },
      kampfmeisterschaftFertigkeit: {
        default: "–",
        type: String,
      },
      kampfmeisterschaftWirkung: {
        default: "–",
        type: String,
      },
    },
  ],
  magiemeisterschaften: [
    {
      magiemeisterschaftName: {
        default: "–",
        type: String,
      },
      magiemeisterschaftFertigkeit: {
        default: "–",
        type: String,
      },
      magiemeisterschaftWirkung: {
        default: "–",
        type: String,
      },
    },
  ],
  staerken: [
    {
      staerkeName: {
        default: "–",
        type: String,
      },
      staerkeWirkung: {
        default: "–",
        type: String,
      },
    },
  ],
  zauber: [
    {
      zauberName: {
        default: "–",
        type: String,
      },
      zauberSchule: {
        default: "–",
        type: String,
      },
      zauberTypus: {
        default: "–",
        type: String,
      },
      zauberSchw: {
        default: "0",
        type: Number,
      },
      zauberKosten: {
        default: "–",
        type: String,
      },
      zauberZD: {
        default: "0",
        type: Number,
      },
      zauberRW: {
        default: "–",
        type: String,
      },
      zauberWD: {
        default: "–",
        type: String,
      },
      zauberWB: {
        default: "–",
        type: String,
      },
      zauberWirkung: {
        default: "–",
        type: String,
      },
      zauberErfolgsgrade: {
        default: "–",
        type: String,
      },
    },
  ],
  waffen: [
    {
      waffeName: {
        default: "–",
        type: String,
      },
      waffeFertigkeit: {
        default: "–",
        type: String,
      },
      waffeAttr1: {
        default: "–",
        type: String,
      },
      waffeAttr2: {
        default: "–",
        type: String,
      },
      waffeMod: {
        default: 0,
        type: Number,
      },
      waffeWGS: {
        default: 0,
        type: Number,
      },
      waffeSchaden: {
        default: "–",
        type: String,
      },
      waffeMerkmale: {
        default: "–",
        type: String,
      },
      waffeRW: {
        default: 0,
        type: Number,
      },
      waffeMun: {
        default: 0,
        type: Number,
      },
      waffeTyp: {
        type: String,
        enum: ["nah", "fern"],
        default: "nah",
      },
    },
  ],
  ruestungen: [
    {
      ruestungName: {
        default: "–",
        type: String,
      },
      ruestungVTD: {
        default: 0,
        type: Number,
      },
      ruestungSR: {
        default: 0,
        type: Number,
      },
      ruestungBeh: {
        default: 0,
        type: Number,
      },
      ruestungTick: {
        default: 0,
        type: Number,
      },
    },
  ],
  schild: [
    {
      schildName: {
        default: "–",
        type: String,
      },
      schildVTD: {
        default: 0,
        type: Number,
      },
      schildMod: {
        default: 0,
        type: Number,
      },
      schildKampffertigkeit: {
        default: "–",
        type: String,
      },
      schildMerkmale: {
        default: "–",
        type: String,
      },
    },
  ],
  sprachen: {
    default: "Basargnomisch",
    type: String,
  },
  ressourcen: {
    ansehen: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    gefolge: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    kontakte: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    kreatur: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    mentor: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    rang: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    relikt: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    stand: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    vermoegen: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
    zuflucht: {
      wert: {
        default: 0,
        type: Number,
      },
      bedeutung: {
        default: "–",
        type: String,
      },
    },
  },
  mondzeichen: {
    mondID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mondzeichen",
    },
    splitterpunkte: {
      default: 3,
      type: Number,
    },
    splitterpunkteAktuell: {
      default: 3,
      type: Number,
    },
  },
  lebenspunkte: {
    lebenKanalisiert: {
      default: 0,
      type: Number,
    },
    lebenErschoepft: {
      default: 0,
      type: Number,
    },
    lebenVerzehrt: {
      default: 0,
      type: Number,
    },
    atemholen: {
      default: false,
      type: Boolean,
    },
    zustaende: {
      default: "keine",
      type: String,
    },
  },
  fokuspunkte: {
    fokusKanalisiert: {
      default: 0,
      type: Number,
    },
    fokusErschoepft: {
      default: 0,
      type: Number,
    },
    fokusVerzehrt: {
      default: 0,
      type: Number,
    },
  },
  artefakte: {
    default: "–",
    type: String,
  },
  begleiter: {
    default: false,
    type: Boolean,
  },
  ausruestung: {
    default: "–",
    type: String
  },
  geld: {
    solare: {
      default: 0,
      type: Number,
    },
    lunare: {
      default: 0,
      type: Number,
    },
    telare: {
      default: 0,
      type: Number,
    },
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
});

const Splittermond = mongoose.model("Splittermond", SplittermondSchema);

export default Splittermond;
