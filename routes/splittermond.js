import express from "express"
import { postSplittermond, getSplittermondAll, getSplittermond, updateSplittermond } from "../controller/splittermond.js"

const splittermondRouter = express.Router()

splittermondRouter.get("/all/:id", getSplittermondAll)
splittermondRouter.get("/:id", getSplittermond)
splittermondRouter.post("/", postSplittermond)
// splittermondRouter.delete("/", deleteSplittermond)
splittermondRouter.put("/", updateSplittermond)

export default splittermondRouter;