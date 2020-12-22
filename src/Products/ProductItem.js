import React, { Component } from "react";

import './ProductItem.scss';

class ProductItem extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    addProductToCard = (product) => {
        this.props.addToCardProduct(product)
    }
    
    render() {
        return(
            <div className="product-card">
                <div className="product-wrapper">
                    <div className="productImg">
                        <img src={this.props.product.imageUrl} alt={this.props.product.imageAlt} />
                    </div>
                    <div className="productName">
                        <p>{this.props.product.name}</p>
                    </div>
                    <div className="productPrice">
                        <p>{this.props.product.price}</p>
                    </div>

                    <button onClick={this.addProductToCard.bind(this, this.props.product)} className="buyBtn">Buy</button>
                </div>
            </div>
        )
    }
}

export default ProductItem;