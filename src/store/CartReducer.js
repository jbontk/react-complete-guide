import * as actions from './Actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      const actionValueItem = action.value.item;
      const itemsAfterAdd = addItem(state.items, actionValueItem);
      return {
        items: itemsAfterAdd,
        totalAmount:
          state.totalAmount + actionValueItem.price * actionValueItem.quantity,
        numberOfItems: sumQuantities(itemsAfterAdd)
      };
    case actions.REMOVE:
      const idToRemove = action.value.id;
      const quantityToRemove = action.value.quantity;
      const itemToRemove = state.items[idToRemove];
      if (itemToRemove && quantityToRemove >= 0) {
        const itemsAfterRemove = { ...state.items };
        if (quantityToRemove >= itemToRemove.quantity) {
          delete itemsAfterRemove[idToRemove];
        } else {
          itemsAfterRemove[idToRemove].quantity -= quantityToRemove;
        }
        return {
          items: itemsAfterRemove,
          totalAmount:
            state.totalAmount -
            itemToRemove.price *
              Math.min(itemToRemove.quantity, quantityToRemove),
          numberOfItems: sumQuantities(itemsAfterRemove)
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
    result[idToUpdate] = { ...itemToAdd };
  }
  return result;
};

const sumQuantities = items => {
  if (!items) return 0;
  return Object.values(items).map(i => i.quantity).reduce((sum, quantity) => sum + quantity);
}

// Model: items = {1: {id: 1, name: .., quantity: ..}, 2: {id: 2, name: .., quantity: ..}, ... }
// Note the extra "quantity" property
export const INITIAL_CART_STATE = {
  items: {},
  totalAmount: 0,
  numberOfItems: 0,
};

export default cartReducer;
