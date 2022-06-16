const mongoose = require("mongoose");
const CustomError = require("../errors");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already in use"],
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    firstName: {
      type: String,
      required: [true, "FirstName is required"],
      minlength: 2,
    },
    lastName: {
      type: String,
      required: [true, "LastName is required"],
      minlength: 2,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      minlength: 11,
      maxlength: 11,
    },
    shippingAddress: {
      type: String,
      required: [true, "Shipping Address is required"],
      minlength: 2,
    },
    billingAddress: {
      type: String,
      required: [true, "Shipping Address is required"],
      minlength: 2,
    },
    gender: {
      type: Boolean,
      required: false,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    role: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  // console.log("this is about to be saved" , this);
  this.password = await bcrypt.hashSync(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new CustomError.BadRequestError("incorrect password");
  }
  throw new CustomError.BadRequestError("incorrect email");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
