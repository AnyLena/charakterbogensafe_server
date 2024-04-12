import express from "express"
import { addAusruestung, addMagie, addRuestung, addTalent, addWaffe, deleteAusruestung, deleteMagie, deleteRuestung, deleteSlayers, deleteTalent, deleteWaffe, getSlayers, getSlayersAll, postSlayers, updateSlayers } from "../controller/slayers.js";

const slayersRouter = express.Router()

slayersRouter.get("/all/:id", getSlayersAll)
slayersRouter.get("/:id", getSlayers)
slayersRouter.post("/", postSlayers)
slayersRouter.delete("/", deleteSlayers)

slayersRouter.put("/", updateSlayers)

slayersRouter.put("/addWaffe", addWaffe )
slayersRouter.put("/deleteWaffe", deleteWaffe )
slayersRouter.put("/addRuestung", addRuestung )
slayersRouter.put("/deleteRuestung", deleteRuestung )
slayersRouter.put("/addTalent", addTalent )
slayersRouter.put("/deleteTalent", deleteTalent )
slayersRouter.put("/addMagie", addMagie )
slayersRouter.put("/deleteMagie", deleteMagie )
slayersRouter.put("/addAusruestung", addAusruestung )
slayersRouter.put("/deleteAusruestung", deleteAusruestung )


export default slayersRouter;