import express from "express";
import {
  postSplittermond,
  getSplittermondAll,
  getSplittermond,
  updateSplittermond,
  deleteSplittermond,
  addItem,
  deleteItem,
  postMondzeichen,
  getMondzeichen,
  postMeisterschaft,
  getMeisterschaft,
} from "../controller/splittermond.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const splittermondRouter = express.Router();

splittermondRouter.get("/all/:id", verifyToken, getSplittermondAll);
splittermondRouter.get("/:id", verifyToken, getSplittermond);
splittermondRouter.post("/", postSplittermond);
splittermondRouter.delete("/", deleteSplittermond);
splittermondRouter.put("/", updateSplittermond);

splittermondRouter.put("/addItem", addItem);
splittermondRouter.put("/deleteItem", deleteItem);

splittermondRouter.post("/mondzeichen", postMondzeichen);
splittermondRouter.get("/mondzeichen/:id", getMondzeichen);

splittermondRouter.post("/meisterschaft", postMeisterschaft);
splittermondRouter.get("/meisterschaft/:id", getMeisterschaft);

export default splittermondRouter;
