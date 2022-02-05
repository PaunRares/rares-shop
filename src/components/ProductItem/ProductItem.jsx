import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import { Link } from 'react-router-dom';
import {ReactComponent as EmptyHeart} from '../../assets/icons/empty-heart.svg';
import {addToFavourites, removeFromFavourites} from '../../redux/favourites/favouritesAction';
import {ReactComponent as FullHeart} from '../../assets/icons/full-heart.svg';


function ProductItem(props) {
    const {name, price, currency, image, id, favouriteProducts} = props;

    return(
        <div className="product-item col-12 col-sm-6 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center text-decoration">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
            {
                favouriteProducts.find(product => product.id === id)
                ? <FullHeart className="mt-2 pointer" onClick={() => {props.removeFromFavourites(id)}}/>
                : <EmptyHeart className="mt-2 pointer" onClick={() => {props.addToFavourites({id, name, price, currency, image})}} />
            }
           

        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavourites: (product) => dispatch(addToFavourites(product)),
        removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
    };
}
function mapStateToProps(state){
    return{
        favouriteProducts: state.favourites.products
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);