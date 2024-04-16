import express from "express"
import { postSplittermond, getSplittermondAll, getSplittermond, updateSplittermond, deleteSplittermond, addItem, deleteItem, postMondzeichen, getMondzeichen } from "../controller/splittermond.js"

const splittermondRouter = express.Router()

splittermondRouter.get("/all/:id", getSplittermondAll)
splittermondRouter.get("/:id", getSplittermond)
splittermondRouter.post("/", postSplittermond)
splittermondRouter.delete("/", deleteSplittermond)
splittermondRouter.put("/", updateSplittermond)

splittermondRouter.put("/addItem", addItem)
splittermondRouter.put("/deleteItem", deleteItem)

splittermondRouter.post("/mondzeichen", postMondzeichen)
splittermondRouter.get("/mondzeichen/:id", getMondzeichen)

export default splittermondRouter;