import React, { Component } from 'react';

import './Cart.scss'
import CartItem from './CartItem'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // список товаров в корзине(из кнопок покупки)
      productsInCart: this.props.addToCartProduct,
      // итоговая цена всех товаров в корзине
      allSum: 0,
    }
  }

  /**
   * обновление информации о товарах в корзине при изменении их кол-ва, добавления/удаления их 
   * @param {*} newProductsData - массив с товарами
   */
  updateCurrentProductData = (newProductData) => {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.productsInCart = stateCopy.productsInCart.slice();
    // находим этот товар по sku
    // const needProduct = stateCopy.productsInCart.filter(el => el.sku == newProductData.sku )
    for (let i=0; i<stateCopy.productsInCart.length; i++) {
      if(stateCopy.productsInCart[i].sku === newProductData.sku) {
        stateCopy.productsInCart[i] = Object.assign({}, newProductData);
        console.log('stateCopy.currentProductsData[i]', stateCopy.productsInCart[i])
      }
    }
    
    
    this.setState(stateCopy);
  }

  /**
   * метод принимает товар на удаление,
   * после ищет его в списке товаров в корзине
   * и удаляет его из списка товаров в корзине
   * @param {Object} product - объект товара на удаление
   */
  deleteProductFromCart = (product) => {
    // console.log('product', product)

    // получаем товары с корзины
    const tmpProductsInCart = this.state.productsInCart
    // console.log('tmpProductsInCart', tmpProductsInCart)

    // ведет перебор по всем товарам в корзине
    for(let i=0; i<tmpProductsInCart.length; i++) {
      console.log('tmpProductsInCart', tmpProductsInCart[i].sku)
      console.log(product.sku)

      // ищет такой же товар в корзине
      if( Number(tmpProductsInCart[i].sku) === Number(product.sku) ) {
        // console.log(tmpProductsInCart[i].sku)

        // удаляет найденый товар с корзины
        tmpProductsInCart.splice(i, 1)
        console.log('tmpProductsInCart', tmpProductsInCart)

        // перезаписывает список товаров в корзине
        this.setState({
          productsInCart: tmpProductsInCart
        })

        // заканчиваем цикл переборов товаров из корзины, так как был найден нужный
        break
      }
    }
  }

  calcPriceAllProductsInCard = () => {
    const allProducts = this.state.productsInCart
    let totalPrice = 0
    for(let i=0; i<allProducts.length; i++) {
      totalPrice += Number(allProducts[i].price)
    }
    console.log(totalPrice)
    return totalPrice
  }

  /**
   * меняем значение итоговой суммы заказа
   */
  changeAllSum = () => {

  }

  render() {
    
    let ListContent = <div></div>
    if (this.props.addToCartProduct.name !== null) {
      // делаем вывод товаров в корзине одним за одним
      ListContent = this.state.productsInCart.map((product, index) => {
        return <CartItem
                  key={index}
                  product={product}
                  deleteProductFunc={this.deleteProductFromCart}
                  updateCurrentProductData={this.updateCurrentProductData}
                />
      })
    }
    

    return(
      <div className="cart-container">
        <div className="cart-wrapper">
          <div className="cart-header">
            <h3 className="cart-heading">Ваш заказ</h3>
          </div>
          <div className="cart-body">
            <div className="cart-table">
              <div className="table-heading">
                <span>{/*for close btn(set flexes currently)*/}</span>
                <span>{/*for img product(set flexes currently)*/}</span>
                <span>Товар</span>
                <span>Кол-во</span>
                <span>Стоимость</span>
              </div>
              <div className="table-content list">
                {ListContent}
              </div>
            </div>
          </div>
          <div className="cart-footer">
              <p className="head-text">Сумма заказа: <strong className="total-price">{this.state.allSum} грн.</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;
