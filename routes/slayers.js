import express from "express"
import { addAusruestung, addMagie, addTalent, addWaffe, deleteAusruestung, deleteMagie, deleteTalent, deleteWaffe, getSlayers, getSlayersAll, postSlayers } from "../controller/slayers.js";

const slayersRouter = express.Router()

slayersRouter.get("/all/:id", getSlayersAll)
slayersRouter.get("/:id", getSlayers)
slayersRouter.post("/", postSlayers)

slayersRouter.put("/", )
slayersRouter.put("/addWaffe", addWaffe )
slayersRouter.put("/deleteWaffe", deleteWaffe )
slayersRouter.put("/addTalent", addTalent )
slayersRouter.put("/deleteTalent", deleteTalent )
slayersRouter.put("/addMagie", addMagie )
slayersRouter.put("/deleteMagie", deleteMagie )
slayersRouter.put("/addAusruestung", addAusruestung )
slayersRouter.put("/deleteAusruestung", deleteAusruestung )


export default slayersRouter;