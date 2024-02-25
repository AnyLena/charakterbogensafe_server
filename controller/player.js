import Player from "../models/Player.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretToken = process.env.SECRET_TOKEN;

const generateToken = (data) => {
  return jwt.sign(data, secretToken, { expiresIn: "3600s" });
};

export const getPlayer = async (req, res) => {
    const {id} = req.player;
    try {
        const data = await Player.findById(id);
        if(!data){
            res.sendStatus(404)
        } else {
            res.json(data)
        }
    } catch(err){
        res.sendStatus(500)
    }
}

export const registerPlayer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const player = await Player.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginPlayer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Player.findOne({ email });
    if (!data) {
        res.sendStatus(404);
    }
    const validPassword = await bcrypt.compare(password, data.password);

    if (!validPassword) {
      return res.sendStatus(400);
    }
    const token = generateToken({
      name: data.name,
      email: data.email,
      id: data._id,
    });
    const player = data
    res.json({token, player});
  } catch (err) {
    res.sendStatus(500);
  }
};
