import Turbofate from "../models/Turbofate.js";

export const getTurbofate = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Turbofate.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getTurbofateAll = async (req, res) => {
  const {id} = req.params;
  try {
    const data = await Turbofate.find({player: id});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postTurbofate = async (req, res) => {
  const {id} = req.body
  try {
    const data = await Turbofate.create({
      allgemeines: { name: 'Neuer Charakter', beschreibung: 'Bitte eintragen', erholung: 0 },
      aspekt: { konzept: 'Bitte eintragen', motivation: 'Bitte eintragen', persoenlich: 'Bitte eintragen', geteilt: "Bitte eintragen", zusatz:"Bitte eintragen" },
      methoden: {
        flink: 0,
        kraftvoll: 0,
        scharfsinnig: 0,
        sorgfaeltig: 0,
        tollkuehn: 0,
        tueckisch: 0,
      },
      stunts: [{stuntName: "Stunt", stuntBeschreibung: "Bitte eintragen"},{stuntName: "Stunt", stuntBeschreibung: "Bitte eintragen"}],
      stress: { eins: false, zwei: false, drei: false },
      konsequenzen: { leicht: '', mittel: '', schwer:'' },
      player: id
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send("Internal server error (POST)");
  }
};

export const updateTurbofate = async (req, res) => {
  const id = req.body._id;
  try {
    const {
      allgemeines: { name, beschreibung, erholung },
      aspekt: { konzept, motivation, persoenlich, geteilt, zusatz },
      methoden: {
        flink,
        kraftvoll,
        scharfsinnig,
        sorgfaeltig,
        tollkuehn,
        tueckisch,
      },
      stunts,
      stress: { eins, zwei, drei },
      konsequenzen: { leicht, mittel, schwer },
    } = req.body;

    let update = {};

    if (name !== undefined) update["allgemeines.name"] = name;
    if (beschreibung !== undefined)
      update["allgemeines.beschreibung"] = beschreibung;
    if (erholung !== undefined)
      update["allgemeines.erholung"] = erholung;
    if (konzept !== undefined) update["aspekt.konzept"] = konzept;
    if (motivation !== undefined) update["aspekt.motivation"] = motivation;
    if (persoenlich !== undefined) update["aspekt.persoenlich"] = persoenlich;
    if (geteilt !== undefined) update["aspekt.geteilt"] = geteilt;
    if (zusatz !== undefined) update["aspekt.zusatz"] = zusatz;
    if (flink !== undefined) update["methoden.flink"] = flink;
    if (kraftvoll !== undefined) update["methoden.kraftvoll"] = kraftvoll;
    if (scharfsinnig !== undefined)
      update["methoden.scharfsinnig"] = scharfsinnig;
    if (sorgfaeltig !== undefined) update["methoden.sorgfaeltig"] = sorgfaeltig;
    if (tollkuehn !== undefined) update["methoden.tollkuehn"] = tollkuehn;
    if (tueckisch !== undefined) update["methoden.tueckisch"] = tueckisch;
    if (stunts !== undefined) update["stunts"] = stunts;
    if (eins !== undefined) update["stress.eins"] = eins;
    if (zwei !== undefined) update["stress.zwei"] = zwei;
    if (drei !== undefined) update["stress.drei"] = drei;
    if (leicht !== undefined) update["konsequenzen.leicht"] = leicht;
    if (mittel !== undefined) update["konsequenzen.mittel"] = mittel;
    if (schwer !== undefined) update["konsequenzen.schwer"] = schwer;

    const data = await Turbofate.findByIdAndUpdate(id, update, { new: true });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(`Internal server error (POST): ${error.message}`);
  }
};
