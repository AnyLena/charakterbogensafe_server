import Splittermond from "../models/Splittermond.js";

export const getSplittermond = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Splittermond.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getSplittermondAll = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Splittermond.find({ player: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteSplittermond = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Splittermond.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postSplittermond = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Splittermond.create({
      player: id,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(`Internal server error (POST) ${error.message}`);
  }
};

export const updateSplittermond = async (req, res) => {
  const id = req.body._id;
  try {
    const {
      allgemeines: {
        name,
        ausbildung,
        kultur,
        abstammung,
        rasse,
        geburtsort,
        schwaechen,
        erscheinung,
        erfahrungspunkte,
        heldengrad,
      },
      attribute: {
        ausstrahlung,
        beweglichkeit,
        intuition,
        konstitution,
        mystik,
        staerke,
        verstand,
        willenskraft,
        groessenklasse,
      },
      fertigkeiten: {
        akrobatik,
        alchemie,
        anfuehren,
        arkanekunde,
        athletik,
        darbietung,
        diplomatie,
        edelhandwerk,
        empathie,
        entschlossenheit,
        fingerfertigkeit,
        geschichtemythen,
        handwerk,
        heilkunde,
        heimlichkeit,
        jadtkunst,
        laenderkunde,
        naturkunde,
        redegewandtheit,
        schloesserfallen,
        schwimmen,
        seefahrt,
        strassenkunde,
        tierfuehrung,
        ueberleben,
        wahrnehmung,
        zaehigkeit,
      },
      meisterschaften,
      kampfmeisterschaften,
      magiemeisterschaften,
      staerken,
      zauber,
    } = req.body;

    let update = {};
    if (name !== undefined) update["allgemeines.name"] = name;
    if (erfahrungspunkte !== undefined)
      update["allgemeines.erfahrungspunkte"] = erfahrungspunkte;
    if (kultur !== undefined) update["allgemeines.kultur"] = kultur;
    if (abstammung !== undefined) update["allgemeines.abstammung"] = abstammung;
    if (ausbildung !== undefined) update["allgemeines.ausbildung"] = ausbildung;
    if (geburtsort !== undefined) update["allgemeines.geburtsort"] = geburtsort;
    if (rasse !== undefined) update["allgemeines.rasse"] = rasse;
    if (geburtsort !== undefined)
      update["allgemeines.klassenbonus"] = geburtsort;
    if (schwaechen !== undefined) update["allgemeines.schwaechen"] = schwaechen;
    if (erscheinung !== undefined)
      update["allgemeines.erscheinung"] = erscheinung;
    if (heldengrad !== undefined) update["allgemeines.heldengrad"] = heldengrad;

    if (ausstrahlung !== undefined)
      update["attribute.ausstrahlung"] = ausstrahlung;
    if (beweglichkeit !== undefined)
      update["attribute.beweglichkeit"] = beweglichkeit;
    if (intuition !== undefined) update["attribute.intuition"] = intuition;
    if (konstitution !== undefined)
      update["attribute.konstitution"] = konstitution;
    if (mystik !== undefined) update["attribute.mystik"] = mystik;
    if (staerke !== undefined) update["attribute.staerke"] = staerke;
    if (verstand !== undefined) update["attribute.verstand"] = verstand;
    if (willenskraft !== undefined)
      update["attribute.willenskraft"] = willenskraft;
    if (groessenklasse !== undefined)
      update["attribute.groessenklasse"] = groessenklasse;

    if (akrobatik !== undefined) update["fertigkeiten.akrobatik"] = akrobatik;
    if (alchemie !== undefined) update["fertigkeiten.alchemie"] = alchemie;
    if (anfuehren !== undefined) update["fertigkeiten.anfuehren"] = anfuehren;
    if (arkanekunde !== undefined)
      update["fertigkeiten.arkanekunde"] = arkanekunde;
    if (athletik !== undefined) update["fertigkeiten.athletik"] = athletik;
    if (darbietung !== undefined)
      update["fertigkeiten.darbietung"] = darbietung;
    if (diplomatie !== undefined)
      update["fertigkeiten.diplomatie"] = diplomatie;
    if (edelhandwerk !== undefined)
      update["fertigkeiten.edelhandwerk"] = edelhandwerk;
    if (empathie !== undefined) update["fertigkeiten.empathie"] = empathie;
    if (entschlossenheit !== undefined)
      update["fertigkeiten.entschlossenheit"] = entschlossenheit;
    if (fingerfertigkeit !== undefined)
      update["fertigkeiten.fingerfertigkeit"] = fingerfertigkeit;
    if (geschichtemythen !== undefined)
      update["fertigkeiten.geschichtemythen"] = geschichtemythen;
    if (handwerk !== undefined) update["fertigkeiten.handwerk"] = handwerk;
    if (heilkunde !== undefined) update["fertigkeiten.heilkunde"] = heilkunde;
    if (heimlichkeit !== undefined)
      update["fertigkeiten.heimlichkeit"] = heimlichkeit;
    if (jadtkunst !== undefined) update["fertigkeiten.jadtkunst"] = jadtkunst;
    if (laenderkunde !== undefined)
      update["fertigkeiten.laenderkunde"] = laenderkunde;
    if (naturkunde !== undefined)
      update["fertigkeiten.naturkunde"] = naturkunde;
    if (redegewandtheit !== undefined)
      update["fertigkeiten.redegewandtheit"] = redegewandtheit;
    if (schloesserfallen !== undefined)
      update["fertigkeiten.schloesserfallen"] = schloesserfallen;
    if (schwimmen !== undefined) update["fertigkeiten.schwimmen"] = schwimmen;
    if (seefahrt !== undefined) update["fertigkeiten.seefahrt"] = seefahrt;
    if (strassenkunde !== undefined)
      update["fertigkeiten.strassenkunde"] = strassenkunde;
    if (tierfuehrung !== undefined)
      update["fertigkeiten.tierfuehrung"] = tierfuehrung;
    if (ueberleben !== undefined)
      update["fertigkeiten.ueberleben"] = ueberleben;
    if (wahrnehmung !== undefined)
      update["fertigkeiten.wahrnehmung"] = wahrnehmung;
    if (zaehigkeit !== undefined)
      update["fertigkeiten.zaehigkeit"] = zaehigkeit;

    if (meisterschaften !== undefined)
      update["meisterschaften"] = meisterschaften;
      if (kampfmeisterschaften !== undefined)
      update["kampfmeisterschaften"] = kampfmeisterschaften;
      if (magiemeisterschaften !== undefined)
      update["magiemeisterschaften"] = magiemeisterschaften;

    if (staerken !== undefined) update["staerken"] = staerken;
    if (zauber !== undefined) update["zauber"] = zauber;

    const data = await Splittermond.findByIdAndUpdate(id, update, {
      new: true,
    });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(`Internal server error (POST): ${error.message}`);
  }
};

export const addItem = async (req, res) => {
  const { id, section, propertyValues } = req.body;
  try {
    const data = await Splittermond.findByIdAndUpdate(
      id,
      {
        $push: {
          [section]: [propertyValues],
        },
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteItem = async (req, res) => {
  const { id, itemId, section } = req.body;
  try {
    const data = await Splittermond.findByIdAndUpdate(
      id,
      {
        $pull: {
          [section]: {
            _id: itemId,
          },
        },
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// export const addRuestung = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           ruestung: {
//             ruestungName: "–",
//             ruestungPa: 0,
//             ruestungBes: "–",
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const deleteRuestung = async (req, res) => {
//   const { id, itemId } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $pull: {
//           ruestung: {
//             _id: itemId,
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const addTalent = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           talente: {
//             talentName: "–",
//             talentRang: 1,
//             talentRangMax: 3,
//             talentEffekt: "–",
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const deleteTalent = async (req, res) => {
//   const { id, itemId } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $pull: {
//           talente: {
//             _id: itemId,
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const addMagie = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           magie: {
//             magieName: "–",
//             magieKb: "–",
//             magieAdWd: "–",
//             magieDist: "–",
//             magieAkz: "–",
//             magieEffekt: "–",
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const deleteMagie = async (req, res) => {
//   const { id, itemId } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $pull: {
//           magie: {
//             _id: itemId,
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const addAusruestung = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           ausruestung: {
//             ausruestungName: "–",
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// export const deleteAusruestung = async (req, res) => {
//   const { id, itemId } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $pull: {
//           ausruestung: {
//             _id: itemId,
//           },
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
