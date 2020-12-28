import React, { Component } from "react";

import './ProductItem.scss';

class ProductItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isButtonDisabled: false,
            product: props.product
        }
    }

    addProductToCart = (product) => {
        this.props.addToCartProduct(product)
        this.changeBuyBtnActivityStatus()
    }

    changeBuyBtnActivityStatus = () => {
        this.setState({
            isButtonDisabled: true
          });
    }
    
    render() {
        return(
            <div className="product-card">
                <div className="product-wrapper">
                    <div className="productImg">
                        <img src={this.state.product.imageUrl} alt={this.state.product.imageAlt} />
                    </div>
                    <div className="productName">
                        <p>{this.state.product.name}</p>
                    </div>
                    <div className="productPrice">
                        <p>{this.state.product.price}</p>
                    </div>

                    <button onClick={this.addProductToCart.bind(this, this.state.product)} className="buyBtn" disabled={this.state.isButtonDisabled}>Buy</button>
                </div>
            </div>
        )
    }
}

export default ProductItem;