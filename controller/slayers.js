import Slayers from "../models/Slayers.js";

export const getSlayers = async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const data = await Slayers.findById(id);
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
};

export const getSlayersAll = async (req, res) => {
  //   const {id} = req.params;
  //   try {
  //     const data = await Slayers.find({player: id});
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
};

export const postSlayers = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.create({
      allgemeines: {
        name: "Neuer Charakter",
        beschreibung: "Bitte eintragen",
        volk: "Bitte eintragen",
        klasse: "Bitte eintragen",
        volksbonus: "Bitte eintragen",
        klassenbonus: "Bitte eintragen",
        volksfaehigkeiten: "Bitte eintragen",
      },
    
     
      talente: [
        {
          talentName: "Talent1",
          talentRang: "Rang1",
          talentEffekt: "Effekt1",
        },
      ],
      magie: [
        {
          magieName: "Magie1",
          magieKb: "Kb1",
          magieAdWd: "AdWd1",
          magieDist: "Dist1",
          magieAkz: "Akz1",
          magieEffekt: "Effekt1",
        },
      ],
      sonstiges: [
        {
          sonstigesBeschreibung: "Beschreibung1",
        },
      ],
      player: id
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(`Internal server error (POST) ${error.message}`);
  }
};

export const updateSlayers = async (req, res) => {
  //   const id = req.body._id;
  //   try {
  //     const {
  //       allgemeines: { name, beschreibung, erholung },
  //       aspekt: { konzept, motivation, persoenlich, geteilt, zusatz },
  //       methoden: {
  //         flink,
  //         kraftvoll,
  //         scharfsinnig,
  //         sorgfaeltig,
  //         tollkuehn,
  //         tueckisch,
  //       },
  //       stunts,
  //       stress: { eins, zwei, drei },
  //       konsequenzen: { leicht, mittel, schwer },
  //     } = req.body;
  //     let update = {};
  //     if (name !== undefined) update["allgemeines.name"] = name;
  //     if (beschreibung !== undefined)
  //       update["allgemeines.beschreibung"] = beschreibung;
  //     if (erholung !== undefined)
  //       update["allgemeines.erholung"] = erholung;
  //     if (konzept !== undefined) update["aspekt.konzept"] = konzept;
  //     if (motivation !== undefined) update["aspekt.motivation"] = motivation;
  //     if (persoenlich !== undefined) update["aspekt.persoenlich"] = persoenlich;
  //     if (geteilt !== undefined) update["aspekt.geteilt"] = geteilt;
  //     if (zusatz !== undefined) update["aspekt.zusatz"] = zusatz;
  //     if (flink !== undefined) update["methoden.flink"] = flink;
  //     if (kraftvoll !== undefined) update["methoden.kraftvoll"] = kraftvoll;
  //     if (scharfsinnig !== undefined)
  //       update["methoden.scharfsinnig"] = scharfsinnig;
  //     if (sorgfaeltig !== undefined) update["methoden.sorgfaeltig"] = sorgfaeltig;
  //     if (tollkuehn !== undefined) update["methoden.tollkuehn"] = tollkuehn;
  //     if (tueckisch !== undefined) update["methoden.tueckisch"] = tueckisch;
  //     if (stunts !== undefined) update["stunts"] = stunts;
  //     if (eins !== undefined) update["stress.eins"] = eins;
  //     if (zwei !== undefined) update["stress.zwei"] = zwei;
  //     if (drei !== undefined) update["stress.drei"] = drei;
  //     if (leicht !== undefined) update["konsequenzen.leicht"] = leicht;
  //     if (mittel !== undefined) update["konsequenzen.mittel"] = mittel;
  //     if (schwer !== undefined) update["konsequenzen.schwer"] = schwer;
  //     const data = await Slayers.findByIdAndUpdate(id, update, { new: true });
  //     // res.status(201).send("Data sucessfully updated.");
  //     // res.status(200).send(data);
  //     res.sendStatus(200);
  //   } catch (error) {
  //     res.status(500).send(`Internal server error (POST): ${error.message}`);
  //   }
};
