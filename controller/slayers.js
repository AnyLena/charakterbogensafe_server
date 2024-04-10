import Slayers from "../models/Slayers.js";

export const getSlayers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Slayers.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getSlayersAll = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Slayers.find({ player: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
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
          talentName: "...",
          talentRang: 0,
          talentEffekt: "...",
        },
      ],
      magie: [
        {
          magieName: "...",
          magieKb: "...",
          magieAdWd: "...",
          magieDist: "...",
          magieAkz: "...",
          magieEffekt: "...",
        },
      ],
      player: id,
      system: "gammaslayers",
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(`Internal server error (POST) ${error.message}`);
  }
};

export const updateSlayers = async (req, res) => {
  const id = req.body._id;
  try {
    const {
      allgemeines: {
        name,
        beschreibung,
        volk,
        klasse,
        volksbonus,
        klassenbonus,
        volksfaehigkeiten
      },
      attribute: { koerper, agilitaet, geist },
      eigenschaften: { staerke, haerte, bewegung, geschick, verstand, aura },
      werte: { lp, tp, ep, tl, stufe, schaden },
      werteGamma: { degeneration, cyberpunkte, mutation },
      ruestung,
      waffen,
      ausruestung,
      geld: { gold, silber, kupfer },
      talente,
      magie,
      sonstiges,
    } = req.body;

    let update = {};
    if (name !== undefined) update["allgemeines.name"] = name;
    if (beschreibung !== undefined) update["allgemeines.beschreibung"] = beschreibung;
    if (volk !== undefined) update["allgemeines.volk"] = volk;
    if (klasse !== undefined) update["allgemeines.klasse"] = klasse;
    if (volksbonus !== undefined) update["allgemeines.volksbonus"] = volksbonus;
    if (klassenbonus !== undefined) update["allgemeines.klassenbonus"] = klassenbonus;
    if (volksfaehigkeiten !== undefined) update["allgemeines.volksfaehigkeiten"] = volksfaehigkeiten;

    if (koerper !== undefined) update["attribute.koerper"] = koerper;
    if (agilitaet !== undefined) update["attribute.agilitaet"] = agilitaet;
    if (geist !== undefined) update["attribute.geist"] = geist;

    if (staerke !== undefined) update["eigenschaften.staerke"] = staerke;
    if (haerte !== undefined) update["eigenschaften.haerte"] = haerte;
    if (bewegung !== undefined) update["eigenschaften.bewegung"] = bewegung;
    if (geschick !== undefined) update["eigenschaften.geschick"] = geschick;
    if (verstand !== undefined) update["eigenschaften.verstand"] = verstand;
    if (aura !== undefined) update["eigenschaften.aura"] = aura;
    
    if (lp !== undefined) update["werte.lp"] = lp;
    if (tp !== undefined) update["werte.tp"] = tp;
    if (ep !== undefined) update["werte.ep"] = ep;
    if (tl !== undefined) update["werte.tl"] = tl;
    if (stufe !== undefined) update["werte.stufe"] = stufe;
    if (schaden !== undefined) update["werte.schaden"] = schaden;
    
    if (degeneration !== undefined) update["werteGamma.degeneration"] = degeneration;
    if (cyberpunkte !== undefined) update["werteGamma.cyberpunkte"] = cyberpunkte;
    if (mutation !== undefined) update["werteGamma.mutation"] = mutation;
    
    if (gold !== undefined) update["geld.gold"] = gold;
    if (silber !== undefined) update["geld.silber"] = silber;
    if (kupfer !== undefined) update["geld.kupfer"] = kupfer;

    if (ruestung !== undefined) update["ruestung"] = ruestung;
    if (waffen !== undefined) update["waffen"] = waffen;
    if (ausruestung !== undefined) update["ausruestung"] = ausruestung;
    if (talente !== undefined) update["talente"] = talente;
    if (magie !== undefined) update["magie"] = magie;
    if (sonstiges !== undefined) update["sonstiges"] = sonstiges;
   
  const data = await Slayers.findByIdAndUpdate(id, update, { new: true });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(`Internal server error (POST): ${error.message}`);
  }
};

export const addWaffe = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $push: {
          waffen: {
            waffeName: "–",
            waffeWb: 0,
            waffeRw: 0,
            waffeMw: 0,
            waffeMun: "–",
            waffeModi: "–",
            waffeBes: "–",
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

export const deleteWaffe = async (req, res) => {
  const { id, itemId } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $pull: {
          waffen: {
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

export const addRuestung = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $push: {
          ruestung: {
            ruestungName: "–",
            ruestungPa: 0,
            ruestungBes: "–",
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

export const deleteRuestung = async (req, res) => {
  const { id, itemId } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $pull: {
          ruestung: {
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

export const addTalent = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $push: {
          talente: {
            talentName: "–",
            talentRang: 1,
            talentRangMax: 3,
            talentEffekt: "–",
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

export const deleteTalent = async (req, res) => {
  const { id, itemId } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $pull: {
          talente: {
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

export const addMagie = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $push: {
          magie: {
            magieName: "–",
            magieKb: "–",
            magieAdWd: "–",
            magieDist: "–",
            magieAkz: "–",
            magieEffekt: "–",
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

export const deleteMagie = async (req, res) => {
  const { id, itemId } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $pull: {
          magie: {
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

export const addAusruestung = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $push: {
          ausruestung: {
            ausruestungName: "–",
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

export const deleteAusruestung = async (req, res) => {
  const { id, itemId } = req.body;
  try {
    const data = await Slayers.findByIdAndUpdate(
      id,
      {
        $pull: {
          ausruestung: {
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
