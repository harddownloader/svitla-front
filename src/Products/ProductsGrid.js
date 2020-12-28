import React, { Component } from "react";

import './ProductGrid.scss';
import ProductItem from './ProductItem'

class ProductGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          name: 'Product 1',
          price: '99.00',
          imageUrl: '/assets/product1.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000001'
        },
        {
          name: 'Product 2',
          price: '105.00',
          imageUrl: '/assets/product2.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000002'
        },
        {
          name: 'Product 3',
          price: '129.00',
          imageUrl: '/assets/product3.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000003'
        },
      ],
    }
  }

  addToCartProduct = (product) => {
    this.props.addToCartProduct(product)
  }

  render() {
    const itemProducts = this.state.products.map((item, index) => {
      return <ProductItem key={index} product={item} addToCartProduct={this.addToCartProduct} />
    })
    
    return(
      <div className="product-list">
        {itemProducts}
      </div>
    )
  }
}

export default ProductGrid;