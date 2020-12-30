import {combineReducers} from "redux";

import filters from "./filters";
import cart from "./cart";
import pizzas from "./pizzas";

const rootReducer =  combineReducers({
    filters,
    cart,
    pizzas
})


export default rootReducer;