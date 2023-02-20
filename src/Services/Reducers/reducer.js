import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer", action);            
            return [
                ...state,
                { cardData: action.data }
            ]
            break;
        case REMOVE_TO_CART:
            // console.warn("reducer", action);            
            state.pop();
            return [
                ...state,
            ]
            break;
        default:
            return state
            break;
    }
}