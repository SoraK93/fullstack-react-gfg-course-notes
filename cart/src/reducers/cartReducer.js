export const cartReducer = (state, action) => {
  let update;
  switch (action.type) {
    case "ADD_TO_CART":
      update = {
        ...state,
        cart: [...state.cart, action.payload],
      };
      return update;
    case "REMOVE_FROM_CART":
      update = {
        ...state,
        cart: state.cart.filter(
          (element) => element._id !== action.payload._id
        ),
      };
      return update;
    default:
      return state;
  }
};
