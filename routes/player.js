import express from 'express'
import { getPlayer, loginPlayer, registerPlayer } from '../controller/player.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const playerRouter = express.Router()

playerRouter.get('/', verifyToken, getPlayer);
playerRouter.post("/signin",registerPlayer)
playerRouter.post("/login", loginPlayer)

export default playerRouter;