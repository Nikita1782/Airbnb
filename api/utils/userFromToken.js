const jwt = require("jsonwebtoken");

const userFromToken = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  //   console.log(req.header);
  //   const token = req.header("Authorization").replace("Bearer ", "");
  // console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decoded);
  return decoded;
};

module.exports = userFromToken;
