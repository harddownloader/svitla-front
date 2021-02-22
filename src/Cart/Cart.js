import React, { Component } from 'react';

import './Cart.scss'
import CartItem from './CartItem'

/**
 * корзина товаров
 */
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
    console.log('newProductData', newProductData)
    var stateCopy = Object.assign({}, this.state);
    stateCopy.productsInCart = stateCopy.productsInCart.slice();
    // находим этот товар по sku и обновляем
    for (let i=0; i<stateCopy.productsInCart.length; i++) {
      if(stateCopy.productsInCart[i].sku === newProductData.sku) {
        // обновляем (вносим новые данные из дочки)
        stateCopy.productsInCart[i] = Object.assign({}, newProductData);
        console.log('stateCopy.currentProductsData[i]', stateCopy.productsInCart[i])
      }
    }
    
    this.setState(stateCopy, function() {
      // обновляем список для родителя
      this.props.updateProductsInBasket(this.state.productsInCart)
      // пересчитываем итоговый ценник
      this.changeAllSum()
    });
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

        if(product.price !== product.originalPrice) {
          // товар скидочный
          console.log('скидочный')
        } else {
          console.log('не скидочный' , tmpProductsInCart.length )
          if (tmpProductsInCart.length >= 2) {
            let nextProductNumber = i + 1
            // console.log('price before tmpProductsInCart[count].price', tmpProductsInCart[count].price)
            tmpProductsInCart[nextProductNumber].price = tmpProductsInCart[nextProductNumber].originalPrice
            tmpProductsInCart[nextProductNumber].totalProductsPrice = tmpProductsInCart[nextProductNumber].price * tmpProductsInCart[nextProductNumber].qta

            // console.log('price after tmpProductsInCart[count].price', tmpProductsInCart[count].price)
          }
          
        }

        // удаляет найденый товар с корзины
        tmpProductsInCart.splice(i, 1)
        console.log('tmpProductsInCart', tmpProductsInCart)
        

        // перезаписывает список товаров в корзине
        this.setState({productsInCart: tmpProductsInCart}, function () {
          console.log('state after del prod', this.state.productsInCart)
          this.changeAllSum()
        })

        // заканчиваем цикл переборов товаров из корзины, так как был найден нужный
        break
      }
    }
  }

  /**
   * меняем значение итоговой суммы заказа
   */
  changeAllSum = () => {
    const allProducts = this.state.productsInCart
    console.log('allProducts', allProducts)
    let needAllSum = 0
    for(let i=0; i<allProducts.length; i++) {
      // есть ли у объекта свойство с значением цены за все кол-во
      if (allProducts[i].hasOwnProperty('totalProductsPrice')) {
        // если есть (т.е. кол-во изменялось) берем подчитанное значение
        needAllSum = needAllSum + Number(allProducts[i].totalProductsPrice)
      } else {
        // если такого свойста нет, значит кол-во мы не меняли, значит оно равно 1
        needAllSum = needAllSum + Number(allProducts[i].price)
      }
      
    }
    console.log('needAllSum', needAllSum)
    // console.log('products in cart changeAllSum', this.state.productsInCart)
    this.setState({allSum: needAllSum})
  }

  render() {
    
    let ListContent = <div></div>
    if (this.props.addToCartProduct.name !== null) {
      // делаем вывод товаров в корзине одним за одним
      console.log('this.state.productsInCart', this.state.productsInCart)
      ListContent = this.state.productsInCart.map((product, index) => {
        return <CartItem
                  key={index}
                  product={product}
                  deleteProductFunc={this.deleteProductFromCart}
                  updateCurrentProductData={this.updateCurrentProductData}
                  changeAllSum={this.changeAllSum}
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
