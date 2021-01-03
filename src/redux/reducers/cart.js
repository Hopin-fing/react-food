import {act} from "@testing-library/react";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
const getTotalPrice = arr => {
    arr.reduce((sum, obj) => obj.price + sum, 0)
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART':

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items : currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            };

            const items =  Object.values(newItems);
            const allPizzas = [].concat.apply([],);
            const totalPrice = getTotalPrice(allPizzas);
            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice
            };
        default:
            return state
    }

}

export default cartReducer;