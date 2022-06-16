const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CustomError = require("../errors");

const createToken = (id, role) => {
  // console.log(id , role) ;
  const token = jwt.sign(
    { id: id, role: role },
    process.env.JWT_SECRET || "CO2-eCommerce-Project",
    {
      expiresIn: process.env.JWT_LIFETIME || 60 * 60 * 24 * 3,
    }
  );
  return token;
};

const signup = async (req, res) => {
  // console.log(req.body);
  const user = await User.create(req.body);
  console.log(user);
  const token = createToken(user._id, user.role);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
  res.status(StatusCodes.CREATED).json({ user: user._id });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const token = createToken(user._id, user.role);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 3 * 1000,
  });
  res.status(StatusCodes.OK).json({ user: user._id });
};

const logOut = (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 1 });
  // console.log("logged out");
  // res.cookie("test", "test", {
  //   httpOnly: true,
  //   maxAge: 1000 * 60 * 60 * 24 * 3,
  // });
  res.status(StatusCodes.OK).json({ msg: "logged out" });
};

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === true) return;
  if (requestUser.id === resourceUserId.toString()) return;
  throw new CustomError.UnauthorizedError(
    "Not authorized to access this route"
  );
};

module.exports = {
  login,
  signup,
  logOut,
  checkPermissions,
};
