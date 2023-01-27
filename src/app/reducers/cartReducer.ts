import { toggleCart} from '../actions';
import { ActionType } from 'typesafe-actions';

interface CartState {
  isCartOpen: boolean;
  items: string[];
}

interface CartActionTypes {
  TOGGLE_CART: typeof toggleCart;
}

type CartActions = ActionType<CartActionTypes[keyof CartActionTypes]>;

const initialState: CartState = {
  isCartOpen: false,
  items: []
};

export const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case toggleCart().type:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
