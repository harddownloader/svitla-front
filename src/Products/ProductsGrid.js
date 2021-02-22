import React, { Component } from "react";

import './ProductGrid.scss';
import ProductItem from './ProductItem'

/**
 * каталог товаров
 */
class ProductGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          name: 'Product 1',
          price: '20.00',
          originalPrice: '20.00',
          imageUrl: '/assets/product1.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000001'
        },
        {
          name: 'Product 2',
          price: '100.00',
          originalPrice: '100.00',
          imageUrl: '/assets/product2.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000002'
        },
        {
          name: 'Product 3',
          price: '30.00',
          originalPrice: '30.00',
          imageUrl: '/assets/product3.jpeg',
          imageAlt: 'iphone',
          qta: 1,
          sku: '000003'
        },
      ],

      // count products
      // countProductsInCart: 0,
    }
  }

  addToCartProduct = (product) => {
    // console.log('addToCartProduct product', product)
    // const countProducts = this.state.countProductsInCart + 1
    // console.log('countProducts', countProducts)
    // this.setState({countProductsInCart: countProducts}, function() {
    //     console.log('this.state.countProductsInCart in function', this.state.countProductsInCart)
    // })
    // // this.state.countProductsInCart = countProducts
    // if(countProducts > 1) {
    //   // последующие с 10% скидкой , т.е. делаем скидку
    //   console.error("помни про то что 2й товар , при удалении 1го станет первым и скидку нужно будет убирать!")
    //   const priceWithSale = Number(product.price) * 0.9
    //   product.price = String(Math.round(priceWithSale))
    //   this.props.addToCartProduct(product)
    // } else {
    //   // простое добавление(1 товар в корзинке)
    //   this.props.addToCartProduct(product)
    // }
    this.props.addToCartProduct(product)
  }

  render() {
    const itemProducts = this.state.products.map((item, index) => {
      return <ProductItem
        key={index}
        product={item}
        addToCartProduct={this.addToCartProduct}
        productsListForCart={this.props.productsListForCart}
        />
    })
    
    return(
      <div className="product-list">
        {itemProducts}
      </div>
    )
  }
}

export default ProductGrid;