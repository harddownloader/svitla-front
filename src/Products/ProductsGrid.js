import React, { Component } from "react";

import './ProductGrid.scss';
import ProductItem from './ProductItem'

class ProductGrid extends Component {
    constructor() {
        super()
        this.state = {
          products: [
            {
              name: 'Product 1',
              price: '99.00',
              imageUrl: '/assets/product1.jpeg',
              imageAlt: 'iphone'
            },
            {
              name: 'Product 2',
              price: '105.00',
              imageUrl: '/assets/product2.jpeg',
              imageAlt: 'iphone'
            },
            {
              name: 'Product 3',
              price: '129.00',
              imageUrl: '/assets/product3.jpeg',
              imageAlt: 'iphone'
            },
        ]
      }
    }

    render() {
        const itemProducts = this.state.products.map((item, index) => {
          return <ProductItem product={item} />
        })
      
        return(
            <div className="product-list">
                {itemProducts}
            </div>
        )
    }
}

export default ProductGrid;