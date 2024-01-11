import jwt from "jsonwebtoken";

const createAccessToken = (document) => {
  const payload = {
    id: document._id,
  };
  const newToken = jwt.sign(payload, "FINNALMINDX", {
    expiresIn: "1h",
  });
  return newToken;
};

const verifyToken = (token) => {
  const checkToken = jwt.verify(token, "FINNALMINDX");
  return checkToken;
};
export { createAccessToken, verifyToken };
