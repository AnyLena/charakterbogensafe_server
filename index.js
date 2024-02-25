import "dotenv/config";
import express from "express";
import { connectDatabase } from "./data/client.js";
import cors from 'cors'
import turbofateRouter from "./routes/turbofate.js";
import playerRouter from "./routes/player.js";

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use("/player", playerRouter)
app.use("/turbo-fate", turbofateRouter);


const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log("App listening on port " + port);
  });
};

startServer().catch((error) => {
  console.log(error, "Failed to start Server");
});
