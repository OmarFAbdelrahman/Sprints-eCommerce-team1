const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const {
  authorizePermissions,
  requireAuth,
} = require("../middleware/authentication");

router
  .route("/")
  .get(getCategories)
  .post([requireAuth, authorizePermissions(true)], createCategory);
router
  .route("/:id")
  .get(getSingleCategory)
  .patch([requireAuth, authorizePermissions(true)], updateCategory)
  .delete([requireAuth, authorizePermissions(true)], deleteCategory);

module.exports = router;
