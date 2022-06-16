const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxLength: [100, "Name can't be more than 100 characters long"],
    },

    description: {
      type: String,
      trim: true,
      required: [true, "Please provide description"],
      maxLength: [1000, "Description can't be more than 1000 characters long"],
    },

    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    gallery: {
      type: [String],
      default: "/images/default-product-image.png",
    },

    stock: {
      type: Number,
      default: 20,
    },

    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Please provide product category"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
