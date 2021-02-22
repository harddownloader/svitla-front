import React, { Component } from "react";

import './ProductItem.scss';

/**
 * карточка товара из каталога
 */
class ProductItem extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isButtonDisabled: false,
      product: props.product,
      // productsListForCartState: props.productsListForCart,
    }
  }

  /**
   * передаем добавленный товар к списку товаров
   * @param {Object} product - добавляемый товар
   */
  addProductToCart = (product) => {
    // console.log(product)
    const productInCart = this.props.productsListForCart
    // console.log('productInCart', productInCart.length)
    if(productInCart.length >= 1) {
      product.price = this.getSalePrice(product.price, 0.9)
    }
    
    this.props.addToCartProduct(product)
    this.changeBuyBtnActivityStatus('hide')
  }

  /**
   * Расчитываем скидочную цену
   * @param {String} price - цена за товар
   * @param {Float} percent - нужный процент, который нужно получить от цены товара
   */
  getSalePrice = (price, percent) => {
    const priceWithSale = Number(price) * 0.9
    let roundedSalePrice = Math.round(priceWithSale)
    console.log('old price', price)
    roundedSalePrice = String(roundedSalePrice)
    console.log('new price', roundedSalePrice)
    return roundedSalePrice
  }

  /**
   * меняем состояние кнопки покупки
   */
  changeBuyBtnActivityStatus = (status) => {
    // если нужно сделать кнопку кликабельной
    if(status === 'show') {
      this.setState({
        isButtonDisabled: false
      });
    // если нужно сделать кнопку не кликабельной
    } else if (status === 'hide') {
      this.setState({
        isButtonDisabled: true
      });
    }
  }
    
  render() {
    return(
      <div className="product-card">
        <div className="product-wrapper">
          <div className="productImg">
            <img src={this.state.product.imageUrl} alt={this.state.product.imageAlt} width="120px"/>
          </div>
          <div className="productName">
            <p>{this.state.product.name}</p>
          </div>
          <div className="productPrice">
            <p>{this.state.product.originalPrice}</p>
          </div>

          <button
            onClick={this.addProductToCart.bind(this, this.state.product)}
            className="buyBtn"
            disabled={this.state.isButtonDisabled}
          >Buy</button>
        </div>
      </div>
    )
  }
}

export default ProductItem;
