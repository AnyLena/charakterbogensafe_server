import express from "express"
import { postSlayers } from "../controller/slayers.js";

const slayersRouter = express.Router()

slayersRouter.get("/all/:id",)
slayersRouter.get("/:id",)
slayersRouter.post("/", postSlayers)
slayersRouter.put("/", )

export default slayersRouter;