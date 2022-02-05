import React from 'react';
import Layout from '../../components/Layout/Layout';
import {connect} from 'react-redux';
import { removeFromFavourites} from '../../redux/favourites/favouritesAction';
import {Link} from 'react-router-dom';
import {ReactComponent as Close} from '../../assets/icons/close.svg';
import './Favourites.css';

function Favourites(props) {
    const { favouriteProducts, removeFromFavourites } = props;
    
  return (
        <Layout>
            <div className="container-fluid container-min-max-width d-flex flex-column justify-content-center">
                <div className="row">
                    {
                        favouriteProducts.length
                        ?favouriteProducts.map(product => {
                            return(
                                <div className="favourite-item col-12 col-sm-6 col-md-4 mb-3 d-flex flex-column align-items-center" key={product.id}>
                                    <Link to={`/product/${product.id}`} className="d-flex flex-column align-items-center text-decoration">
                                        <img src={product.image} alt="Produs" />
                                        <p>{product.name}</p>                                       
                                     </Link>
                                    <p>{product.price} {product.currency}</p>
                                    <Close className="pointer" onClick={() => {removeFromFavourites(product.id)}}/>
                                </div>
                            )
                            
                        })
                        :<div className="d-flex flex-column align-items-center justify-content-center">
                            <p className="h3">Nu ai produse la favorite!</p>
                            <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                        </div>
                    } 
                </div>
            </div>
        </Layout>
    )
        
}

function mapStateToProps(state) {
    return {
        favouriteProducts: state.favourites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavourites: (payload) => dispatch(removeFromFavourites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
