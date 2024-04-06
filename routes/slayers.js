import express from "express"
import { getSlayers, getSlayersAll, postSlayers } from "../controller/slayers.js";

const slayersRouter = express.Router()

slayersRouter.get("/all/:id", getSlayersAll)
slayersRouter.get("/:id", getSlayers)
slayersRouter.post("/", postSlayers)
slayersRouter.put("/", )

export default slayersRouter;