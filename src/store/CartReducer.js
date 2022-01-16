import * as actions from './Actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      const actionValue = action.value; // {item: .., quantity: ..}
      const itemsAfterAdd = addItem(state, action.value);
      return {
        items: itemsAfterAdd,
        totalAmount: state.totalAmount + actionValue.item.price * actionValue.quantity,
        numberOfItems: Object.values(itemsAfterAdd).length,
      };
    case actions.REMOVE:
      const idToRemove = action.value.item.id;
      const itemQtyPairToRemove = state.items[idToRemove];
      if (itemQtyPairToRemove) {
        const itemsAfterRemove = { ...state.items };
        delete itemsAfterRemove[action.value.item.id];
        return {
          items: itemsAfterRemove,
          totalAmount: state.totalAmount - itemQtyPairToRemove.item.price * itemQtyPairToRemove.quantity,
          numberOfItems: state.numberOfItems - 1,
        };
      }
      return { ...state };
    default:
      return INITIAL_CART_STATE;
  }
};

const addItem = (state, actionValue) => {
  const idToUpdate = actionValue.item.id;
  const itemToUpdate = state.items[idToUpdate];
  const result = { ...state.items };
  if (itemToUpdate) {
    result[idToUpdate].quantity += actionValue.quantity;
  } else {
    result[idToUpdate] = {
      item: actionValue.item,
      quantity: actionValue.quantity,
    };
  }
  return result;
};

export const INITIAL_CART_STATE = {items: {}, totalAmount: 0, numberOfItems: 0}; // items = {1: {item: {id: 1, name: ..}, quantity: ..}, 2: {item: {id: 2, name: ..}, quantity: ..}, ... }

export default cartReducer;
