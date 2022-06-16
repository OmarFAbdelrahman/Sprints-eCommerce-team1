import { ADD_TO_CART, CLEAR, DECREMENT, INCREMENT } from "../actions/cart";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.product.id]: state[action.product.id]
          ? state[action.product.id] + action.product.quantity
          : action.product.quantity,
      };
    case INCREMENT:
      return {
        ...state,
        [action.itemId]: state[action.itemId] + 1,
      };
    case DECREMENT:
      if (state[action.itemId] === 1) {
        const ids = Object.keys(state).filter((id) => id != action.itemId);
        const newState = {};
        ids.forEach((id) => {
          newState[id] = state[id];
        });
        return newState;
      } else {
        return {
          ...state,
          [action.itemId]: state[action.itemId] - 1,
        };
      }
    case CLEAR:
      return {};
    default:
      return state;
  }
};
