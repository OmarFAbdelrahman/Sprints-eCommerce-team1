export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CLEAR = "CLEAR";

export const addToCart = (id, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    product: {
      id,
      quantity,
    },
  };
};

export const incrementItem = (id) => {
  return {
    type: INCREMENT,
    itemId: id,
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT,
    itemId: id,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};
