const jwt = require("jsonwebtoken");
const CustomError = require("../errors");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  const isTokenValid = ({ token }) =>
    jwt.verify(token, process.env.JWT_SECRET || "CO2-eCommerce-Project");

  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }

  try {
    const { id, role } = isTokenValid({ token });
    req.user = { id, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next();
  };
};

module.exports = { requireAuth, authorizePermissions };
