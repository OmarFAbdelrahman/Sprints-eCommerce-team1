const Order = require("../models/Order");
const Product = require("../models/Product");
const { checkPermissions } = require("../controllers/authController");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createOrder = async (req, res) => {
  const { cartItems, shippingFee, paymentMethod, cardId } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError("No cart items provided");
  }

  if (!paymentMethod || paymentMethod !== "Cash") {
    throw new CustomError.BadRequestError(
      "Please provide valid payment method"
    );
  }

  let orderItems = [];
  let subTotal = 0;

  for (const item of cartItems) {
    const product = await Product.findOne({ _id: item.product });
    if (!product) {
      throw new CustomError.NotFoundError(
        `No product found with id : ${item.product}`
      );
    }

    const { name, price, gallery, discount, _id } = product;
    const originalPrice = price;
    const singleOrderItem = {
      quantity: item.quantity,
      name,
      price: originalPrice - discount,
      gallery,
      product: _id,
    };

    orderItems = [...orderItems, singleOrderItem];

    subTotal += item.quantity * singleOrderItem.price;
  }
  const total = subTotal;

  const order = await Order.create({
    orderItems,
    total,
    subTotal,
    paymentMethod,
    user: req.user.id,
  });
  res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user);
  res.status(StatusCodes.OK).json({ order });
};

const getCurrentOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const UpdateOrderStatus = async (req, res) => {
  const { id: orderId } = req.params;
  const { status } = req.body;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }

  order.status = status;
  await order.save();
  res.status(StatusCodes.OK).json({ order });
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentOrders,
  UpdateOrderStatus,
};
