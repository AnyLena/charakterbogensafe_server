import Splittermond from "../models/Splittermond.js";
import Mondzeichen from "../models/Mondzeichen.js";
import Meisterschaft from "../models/Meisterschaften.js";

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
  const { id, begleiter, newChar } = req.body;
  try {
    const data = await Splittermond.create({
      player: id,
      begleiter,
      "allgemeines.name": newChar.newName,
      "mondzeichen.mondID": newChar.mondID,
      "attribute.groessenklasse": newChar.groessenklasse,
      "attribute.ausstrahlung.basis": newChar.ausstrahlung,
      "attribute.beweglichkeit.basis": newChar.beweglichkeit,
      "attribute.intuition.basis": newChar.intuition,
      "attribute.konstitution.basis": newChar.konstitution,
      "attribute.mystik.basis": newChar.mystik,
      "attribute.staerke.basis": newChar.staerke,
      "attribute.verstand.basis": newChar.verstand,
      "attribute.willenskraft.basis": newChar.willenskraft,
      "attribute.ausstrahlung.aktuell": newChar.ausstrahlung,
      "attribute.beweglichkeit.aktuell": newChar.beweglichkeit,
      "attribute.intuition.aktuell": newChar.intuition,
      "attribute.konstitution.aktuell": newChar.konstitution,
      "attribute.mystik.aktuell": newChar.mystik,
      "attribute.staerke.aktuell": newChar.staerke,
      "attribute.verstand.aktuell": newChar.verstand,
      "attribute.willenskraft.aktuell": newChar.willenskraft,
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
        geschlecht,
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
        jagdkunst,
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
      magieschulen: {
        bannmagie,
        beherrschungsmagie,
        bewegungsmagie,
        erkenntnismagie,
        felsmagie,
        feuermagie,
        heilungsmagie,
        illusionsmagie,
        kampfmagie,
        lichtmagie,
        naturmagie,
        schattenmagie,
        schicksalsmagie,
        schutzmagie,
        staerkungsmagie,
        todesmagie,
        verwandlungsmagie,
        wassermagie,
        windmagie,
      },
      kampffertigkeiten: {
        handgemenge,
        hiebwaffen,
        kettenwaffen,
        klingenwaffen,
        stangenwaffen,
        schusswaffen,
        wurfwaffen,
      },
      meisterschaften,
      kampfmeisterschaften,
      magiemeisterschaften,
      staerken,
      zauber,
      waffen,
      ruestungen,
      schild,
      sprachen,
      ressourcen,
      artefakte,
      mondzeichen: { mondID, splitterpunkte, splitterpunkteAktuell },
      lebenspunkte: {
        lebenKanalisiert,
        lebenErschoepft,
        lebenVerzehrt,
        atemholen,
        zustaende,
      },
      fokuspunkte: { fokusKanalisiert, fokusErschoepft, fokusVerzehrt },
      geld: { solare, lunare, telare },
      ausruestung,
    } = req.body;

    let update = {};
    if (name !== undefined) update["allgemeines.name"] = name;
    if (geschlecht !== undefined) update["allgemeines.geschlecht"] = geschlecht;
    if (erfahrungspunkte !== undefined)
      update["allgemeines.erfahrungspunkte"] = erfahrungspunkte;
    if (kultur !== undefined) update["allgemeines.kultur"] = kultur;
    if (abstammung !== undefined) update["allgemeines.abstammung"] = abstammung;
    if (ausbildung !== undefined) update["allgemeines.ausbildung"] = ausbildung;
    if (geburtsort !== undefined) update["allgemeines.geburtsort"] = geburtsort;
    if (geschlecht !== undefined) update["allgemeines.geschlecht"] = geschlecht;
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
    if (jagdkunst !== undefined) update["fertigkeiten.jagdkunst"] = jagdkunst;
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

    if (bannmagie !== undefined) update["magieschulen.bannmagie"] = bannmagie;
    if (beherrschungsmagie !== undefined)
      update["magieschulen.beherrschungsmagie"] = beherrschungsmagie;
    if (bewegungsmagie !== undefined)
      update["magieschulen.bewegungsmagie"] = bewegungsmagie;
    if (erkenntnismagie !== undefined)
      update["magieschulen.erkenntnismagie"] = erkenntnismagie;
    if (felsmagie !== undefined) update["magieschulen.felsmagie"] = felsmagie;
    if (feuermagie !== undefined)
      update["magieschulen.feuermagie"] = feuermagie;
    if (heilungsmagie !== undefined)
      update["magieschulen.heilungsmagie"] = heilungsmagie;
    if (illusionsmagie !== undefined)
      update["magieschulen.illusionsmagie"] = illusionsmagie;
    if (kampfmagie !== undefined)
      update["magieschulen.kampfmagie"] = kampfmagie;
    if (lichtmagie !== undefined)
      update["magieschulen.lichtmagie"] = lichtmagie;
    if (naturmagie !== undefined)
      update["magieschulen.naturmagie"] = naturmagie;
    if (schattenmagie !== undefined)
      update["magieschulen.schattenmagie"] = schattenmagie;
    if (schicksalsmagie !== undefined)
      update["magieschulen.schicksalsmagie"] = schicksalsmagie;
    if (schutzmagie !== undefined)
      update["magieschulen.schutzmagie"] = schutzmagie;
    if (staerkungsmagie !== undefined)
      update["magieschulen.staerkungsmagie"] = staerkungsmagie;
    if (todesmagie !== undefined)
      update["magieschulen.todesmagie"] = todesmagie;
    if (verwandlungsmagie !== undefined)
      update["magieschulen.verwandlungsmagie"] = verwandlungsmagie;
    if (wassermagie !== undefined)
      update["magieschulen.wassermagie"] = wassermagie;
    if (windmagie !== undefined) update["magieschulen.windmagie"] = windmagie;

    if (handgemenge !== undefined)
      update["kampffertigkeiten.handgemenge"] = handgemenge;
    if (hiebwaffen !== undefined)
      update["kampffertigkeiten.hiebwaffen"] = hiebwaffen;
    if (kettenwaffen !== undefined)
      update["kampffertigkeiten.kettenwaffen"] = kettenwaffen;
    if (klingenwaffen !== undefined)
      update["kampffertigkeiten.klingenwaffen"] = klingenwaffen;
    if (stangenwaffen !== undefined)
      update["kampffertigkeiten.stangenwaffen"] = stangenwaffen;
    if (schusswaffen !== undefined)
      update["kampffertigkeiten.schusswaffen"] = schusswaffen;
    if (wurfwaffen !== undefined)
      update["kampffertigkeiten.wurfwaffen"] = wurfwaffen;

    if (meisterschaften !== undefined)
      update["meisterschaften"] = meisterschaften;
    if (kampfmeisterschaften !== undefined)
      update["kampfmeisterschaften"] = kampfmeisterschaften;
    if (magiemeisterschaften !== undefined)
      update["magiemeisterschaften"] = magiemeisterschaften;

    if (mondID !== undefined) update["mondzeichen.mondID"] = mondID;
    if (splitterpunkte !== undefined)
      update["mondzeichen.splitterpunkte"] = splitterpunkte;
    if (splitterpunkteAktuell !== undefined)
      update["mondzeichen.splitterpunkteAktuell"] = splitterpunkteAktuell;

    if (lebenKanalisiert !== undefined)
      update["lebenspunkte.lebenKanalisiert"] = lebenKanalisiert;
    if (lebenErschoepft !== undefined)
      update["lebenspunkte.lebenErschoepft"] = lebenErschoepft;
    if (lebenVerzehrt !== undefined)
      update["lebenspunkte.lebenVerzehrt"] = lebenVerzehrt;
    if (atemholen !== undefined) update["lebenspunkte.atemholen"] = atemholen;
    if (zustaende !== undefined) update["lebenspunkte.zustaende"] = zustaende;

    if (fokusKanalisiert !== undefined)
      update["fokuspunkte.fokusKanalisiert"] = fokusKanalisiert;
    if (fokusErschoepft !== undefined)
      update["fokuspunkte.fokusErschoepft"] = fokusErschoepft;
    if (fokusVerzehrt !== undefined)
      update["fokuspunkte.fokusVerzehrt"] = fokusVerzehrt;

    if (solare !== undefined) update["geld.solare"] = solare;
    if (lunare !== undefined) update["geld.lunare"] = lunare;
    if (telare !== undefined) update["geld.telare"] = telare;

    if (staerken !== undefined) update["staerken"] = staerken;
    if (sprachen !== undefined) update["sprachen"] = sprachen;
    if (ressourcen !== undefined) update["ressourcen"] = ressourcen;
    if (ausruestung !== undefined) update["ausruestung"] = ausruestung;

    if (zauber !== undefined) update["zauber"] = zauber;
    if (waffen !== undefined) update["waffen"] = waffen;
    if (ruestungen !== undefined) update["ruestungen"] = ruestungen;
    if (schild !== undefined) update["schild"] = schild;

    if (artefakte !== undefined) update["artefakte"] = artefakte;

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

export const activateItem = async (req, res) => {
  const { charId, itemId, section, subsection, newValue } = req.body;
  try {
    const data = await Splittermond.updateOne(
      { _id: charId, [`${section}._id`]: itemId },
      {
        $set: {
          [`${section}.$[elem].${subsection}`]: newValue,
        },
      },
      {
        arrayFilters: [{ "elem._id": itemId }],
        new: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// export const postMondzeichen = async (req, res) => {
//   const { mondName, mondBeschreibung, mondVerstaerkt, mondGeheim } = req.body;
//   try {
//     const data = await Mondzeichen.create({
//       mondName,
//       mondBeschreibung,
//       mondVerstaerkt,
//       mondGeheim,
//     });
//     res.status(201).json(data);
//   } catch (error) {
//     res.status(500).send(`Internal server error (POST) ${error.message}`);
//   }
// };

export const getMondzeichen = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Mondzeichen.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getMondzeichenName = async (req, res) => {
  const { mondName } = req.params;
  try {
    const data = await Mondzeichen.findOne({mondName});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postMeisterschaft = async (req, res) => {
  const { name, schwelle, gruppe, fertigkeiten } = req.body;
  try {
    const data = await Meisterschaft.create({
      name,
      schwelle,
      gruppe,
      fertigkeiten,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(`Internal server error (POST) ${error.message}`);
  }
};

export const getMeisterschaften = async (req, res) => {
  const { fertigkeit, gruppe } = req.params;
  try {
    const data = await Meisterschaft.find({
      gruppe,
      fertigkeiten: fertigkeit,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
