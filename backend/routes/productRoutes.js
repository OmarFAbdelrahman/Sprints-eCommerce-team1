const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

const {
  authorizePermissions,
  requireAuth,
} = require("../middleware/authentication");

router
  .route("/")
  .get(getProducts)
  .post([requireAuth, authorizePermissions(true)], createProduct);

router
  .route("/uploadImage")
  .post([requireAuth, authorizePermissions(true)], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([requireAuth, authorizePermissions(true)], updateProduct)
  .delete([requireAuth, authorizePermissions(true)], deleteProduct);

module.exports = router;
