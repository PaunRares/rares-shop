import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./favouritesConstants";
const initialState = {
    products: []
}

export function favouritesReducers (state=initialState, action){
    switch(action.type){
        case ADD_TO_FAVOURITES:
            let productExist = false;
            state.products.forEach(product => {
                if(product.id === action.payload.id){
                    productExist = true;
                }
            })
            if (productExist) {
                return {
                    ...state,
                    products: [...state.products]
                }
            }else {
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
            }
        case REMOVE_FROM_FAVOURITES:
            const newProducts = state.products.filter(product => product.id !== action.payload)
            return {
                ...state,
                products: newProducts
            }
        default:
            return state;

    }
}