import * as actions from './Actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      const actionValueItem = action.value.item;
      const itemsAfterAdd = addItem(state.items, actionValueItem);
      return {
        items: itemsAfterAdd,
        totalAmount: state.totalAmount + actionValueItem.price * actionValueItem.quantity,
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

const addItem = (items, itemToAdd) => {
  const idToUpdate = itemToAdd.id;
  const itemToUpdate = items[idToUpdate];
  const result = { ...items };
  if (itemToUpdate) {
    result[idToUpdate].quantity += itemToAdd.quantity;
  } else {
    result[idToUpdate] = {...itemToAdd};
  }
  return result;
};

// Model: items = {1: {id: 1, name: .., quantity: ..}, 2: {id: 2, name: .., quantity: ..}, ... }
// Note the extra "quantity" property
export const INITIAL_CART_STATE = {items: {}, totalAmount: 0, numberOfItems: 0}; 

export default cartReducer;
