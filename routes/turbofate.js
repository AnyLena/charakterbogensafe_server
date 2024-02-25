import express from "express"
import { postTurbofate, getTurbofate, getTurbofateAll, updateTurbofate } from "../controller/turbofate.js";

const turbofateRouter = express.Router()

turbofateRouter.get("/all/:id", getTurbofateAll)
turbofateRouter.get("/:id", getTurbofate)
turbofateRouter.post("/", postTurbofate)
turbofateRouter.put("/", updateTurbofate)

export default turbofateRouter;