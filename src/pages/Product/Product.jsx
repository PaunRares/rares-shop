import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import { ReactComponent as EmptyHeart } from '../../assets/icons/empty-heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/full-heart.svg';
import {addToFavourites, removeFromFavourites} from '../../redux/favourites/favouritesAction';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details ms-3">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-dark  font-weight-bold"
                                    onClick={() => {
                                        this.props.addToCart({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image
                                            }
                                        })
                                    }}
                                >
                                    Adaugă în coș
                                </button>
                                {
                                    this.props.favouriteProducts.find(item => item.id === product.id)
                                    ? <FullHeart className="ms-2 pointer" onClick={() => {this.props.removeFromFavourites(product.id)}}/>
                                    : <EmptyHeart className="ms-2 pointer" onClick={() => {this.props.addToFavourites({
                                        id: product.id, 
                                        name: product.name, 
                                        price: product.price, 
                                        currency: product.currency, 
                                        image: product.image
                                    })}} />
                                }
                            </div>
                            <p className="mt-4"><span className="font-weight-bold">Cod Producator</span>: {product.producerCod}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Garantie</span>: {product.guarantee}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavourites: (product) => dispatch(addToFavourites(product)),
        removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
    };
}
function mapStateToProps(state){
    return{
        favouriteProducts: state.favourites.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);