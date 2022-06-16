const { StatusCodes } = require("http-status-codes");
const Category = require("../models/Category");
const CustomError = require("../errors");

const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ category });
};

const getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(StatusCodes.OK).json({ categories, count: categories.length });
};

const getSingleCategory = async (req, res) => {
  const { id: categoryId } = req.params;
  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    throw new CustomError.NotFoundError(
      `No category found with id : ${categoryId}`
    );
  }

  res.status(StatusCodes.OK).json({ category });
};

const updateCategory = async (req, res) => {
  const { id: categoryId } = req.params;
  const category = await Category.findOneAndUpdate(
    { _id: categoryId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!category) {
    throw new CustomError.NotFoundError(
      `No category found with id : ${categoryId}`
    );
  }

  res.status(StatusCodes.OK).json({ category });
};

const deleteCategory = async (req, res) => {
  const { id: categoryId } = req.params;
  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    throw new CustomError.NotFoundError(
      `No category found with id : ${categoryId}`
    );
  }
  await category.remove();
  res.status(StatusCodes.OK).json({ msg: "Category is deleted" });
};

module.exports = {
  createCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
