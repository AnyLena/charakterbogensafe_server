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
  getMeisterschaften,
  activateItem,
} from "../controller/splittermond.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const splittermondRouter = express.Router();

splittermondRouter.get("/all/:id", verifyToken, getSplittermondAll);
splittermondRouter.get("/:id", verifyToken, getSplittermond);
splittermondRouter.post("/", verifyToken, postSplittermond);
splittermondRouter.delete("/", verifyToken, deleteSplittermond);
splittermondRouter.put("/", updateSplittermond);

splittermondRouter.put("/addItem", addItem);
splittermondRouter.put("/deleteItem", deleteItem);
splittermondRouter.put("/activateItem", activateItem);

splittermondRouter.post("/mondzeichen", postMondzeichen);
splittermondRouter.get("/mondzeichen/:id", getMondzeichen);

splittermondRouter.post("/meisterschaft", postMeisterschaft);
splittermondRouter.get("/meisterschaft/:gruppe/:fertigkeit", getMeisterschaften);


export default splittermondRouter;
