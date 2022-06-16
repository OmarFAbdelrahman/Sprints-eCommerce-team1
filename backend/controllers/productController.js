const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const path = require("path");
const CustomError = require("../errors");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }
  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Product removed" });
};

const uploadImage = async (req, res) => {
  console.log(req.files);
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded");
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload an image");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("image must be smaller than 1 MB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/images/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res.status(StatusCodes.OK).json({ image: `/images/${productImage.name}` });
};

module.exports = {
  createProduct,
  deleteProduct,
  uploadImage,
  updateProduct,
  getProducts,
  getSingleProduct,
};
