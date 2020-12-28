import React, { Component } from 'react';

import './Cart.scss'
import CartItem from './CartItem'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // productsInCart: [],
      productsInCart: this.props.addToCartProduct
    }
  }

  addToCartProduct = (product) => {
    console.log(product)
    // данный товар есть в корзине?
    // если есть , то меняем у него только кол-во
    // если нет то добавляем в массив корзины
    // if(this.state.productsInCart.length > 0) {
      
    //   let findDuplicate = false
    //   this.state.productsInCart.map( (productItem, index) => {
    //     if (productItem.sku === product.sku) {
    //       // this.changeQtaForDuplicate(productItem.qta, index)
    //       findDuplicate = true
    //     }
    //   })

    //   // если не нашли продукт уже в списке, то просто добавляем его в список как новый
    //   if (!findDuplicate) {
    //     this.addNewProductToList(product)
    //   }

    // } else {
    //   this.addNewProductToList(product)
    // }
    this.addNewProductToList(product)
  }

  addNewProductToList = (product) => {
    // this.state.productsInCart.push(product)
    console.log('product', product)
    let tmpArr = this.state.productsInCart
    console.log(tmpArr)
    tmpArr.push(product)
    // this.setState({productsInCart: tmpArr})
  }
    
    
  // changeQtaForDuplicate = (currentQta, itNumberInList) => {
  //   this.setState(prevState => ({

  //     // productsInCart: prevState.productsInCart.map(el => {
  //     //     el.itNumberInList === itNumberInList ? { ...el, qta: currentQta++ }: el
  //     //   }
  //     // )
  //     productsInCart: [
  //       ...prevState.productsInCart,
  //       prevState.productsInCart[itNumberInList]: currentQta,
  //     ]
    
    
  //   }))
  // }

  deleteProductFromCart = (product) => {
    // console.log('product', product)
    const tmpProductsInCart = this.state.productsInCart
    // console.log('tmpProductsInCart', tmpProductsInCart)
    for(let i=0;i<tmpProductsInCart.length;i++) {
      console.log('tmpProductsInCart', tmpProductsInCart[i].sku)
      console.log(product.sku)
     if( Number(tmpProductsInCart[i].sku) === Number(product.sku) ) {
      //  console.log(tmpProductsInCart[i].sku)
      tmpProductsInCart.splice(i, 1)
      console.log('tmpProductsInCart', tmpProductsInCart)

      this.setState({
        productsInCart: tmpProductsInCart
      })

      break
     }
    }
    
  }

  render() {
    // console.log(this.props.addToCartProduct)
    let ListContent = <div></div>
    if (this.props.addToCartProduct.name !== null) {
      // console.log(this.props.addToCartProduct)

      console.log(this.props)
      // this.addToCartProduct(this.props.addToCartProduct)
      console.log(this.state.productsInCart)

      ListContent = this.state.productsInCart.map((product, index) => {
        return <CartItem key={index} product={product} deleteProductFunc={this.deleteProductFromCart} />
        // return <div key={index}>item</div>
        // return <Test key={index} product={product} />
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
                <span>товар</span>
                <span>Кол-во</span>
                <span>Стоимость</span>
              </div>
              <div className="table-content list">
                {ListContent}
              </div>
            </div>
          </div>
          <div className="cart-footer">
              <p className="head-text">Сумма заказа: <strong className="total-price">0</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;
