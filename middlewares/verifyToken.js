import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
  const authHeader = req.headers.authorization;
  const secretToken = process.env.SECRET_TOKEN;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secretToken, (err, player) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.player = player;
    next();
  });
};
