const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide category name"],
      maxLength: [100, "Category name can't be more than 100 characters long"],
      unique: [true, "Please provide a unique category name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
