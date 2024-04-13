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

    if (ausstrahlung !== undefined) update["attribute.ausstrahlung"] = ausstrahlung;
    if (beweglichkeit !== undefined) update["attribute.beweglichkeit"] = beweglichkeit;
    if (intuition !== undefined) update["attribute.intuition"] = intuition;
    if (konstitution !== undefined) update["attribute.konstitution"] = konstitution;
    if (mystik !== undefined) update["attribute.mystik"] = mystik;
    if (staerke !== undefined) update["attribute.staerke"] = staerke;
    if (verstand !== undefined) update["attribute.verstand"] = verstand;
    if (willenskraft !== undefined) update["attribute.willenskraft"] = willenskraft;
    if (groessenklasse !== undefined) update["attribute.groessenklasse"] = groessenklasse;
    
    const data = await Splittermond.findByIdAndUpdate(id, update, {
      new: true,
    });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(`Internal server error (POST): ${error.message}`);
  }
};

// export const addWaffe = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $push: {
//           waffen: {
//             waffeName: "–",
//             waffeWb: 0,
//             waffeRw: 0,
//             waffeMw: 0,
//             waffeMun: "–",
//             waffeModi: "–",
//             waffeBes: "–",
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

// export const deleteWaffe = async (req, res) => {
//   const { id, itemId } = req.body;
//   try {
//     const data = await Splittermond.findByIdAndUpdate(
//       id,
//       {
//         $pull: {
//           waffen: {
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
