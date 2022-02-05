import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_PRODUCT } from "./cartConstants";
const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case REMOVE_FROM_CART:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        case REMOVE_PRODUCT:
            let products = state.products.map(product => {
                if(product.id === action.payload.id){
                    return {
                        ...product,
                        quantity: product.quantity-1
                    }
                }else{
                    return {
                        ...product
                    }
                }
            })
            products = products.filter(product => product.quantity !==0 )
            return {
                ...state,
                products: products
            }

            
        default:
            return state;
    }
}

