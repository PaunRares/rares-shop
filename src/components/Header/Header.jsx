import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/userAction';
import { ReactComponent as EmptyHeart } from '../../assets/icons/empty-heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/full-heart.svg';



function Header(props) {
    const numberOfProductsInCart = products => {
        return products.reduce((acc, obj) => {
            return acc + obj.quantity
        },0)
    }
    return(
        <header className="mb-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5 mobile-font-size" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mobile-font-size mb-0 me-1">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="me-1"/>
                                {
                                    numberOfProductsInCart(props.productsInCart)
                                    ?<p className="me-1 mb-0">{ numberOfProductsInCart(props.productsInCart) }</p>
                                    :<p className="me-1 mb-0 invisible">0</p>
                                }
                            </Link>
                            <Link to="/favourites">
                                {
                                    props.favouriteProducts
                                    ?<><FullHeart/><span className="ms-2">{props.favouriteProducts}</span></>
                                    :<><EmptyHeart/><span className="ms-2 invisible">0</span></>    
                                }
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        productsInCart: state.cart.products,
        user: state.user.data,
        favouriteProducts: state.favourites.products.length
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);