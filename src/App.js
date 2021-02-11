import React, { Component } from "react";
import ReactDOM from 'react-dom'

import './App.scss';
// import Albom from './Layout/Album'
import Modal from './Modal/Modal'
// import ModalMaterial from './Modal/ModalMaterial'
import ProductsGrid from './Products/ProductsGrid'
import Cart from './Cart/Cart'

class App extends Component {
  constructor() {
    super()
    this.state = {
      productsListForCart: []
    }
  }
  /**
   * обновляем список товаров в корзине
   * @param {Array} newList - новый список товаров, который уже в корзине
   */
  updateProductsInBasket = (newList) => {
    this.setState({productsListForCart: newList})
  }

  /**
   * получаем новый товар, который добавляем к списку товаров для корзины
   * и отправляем корзине
   * @param {Object} product - новый товар для корзины
   */
  transferTheProductToTheBasket = (product) => {
    console.log(product)
    const currentProductList = this.state.productsListForCart
    currentProductList.push(product)
    this.setState({productsListForCart: currentProductList})
  }

  render() {
    return (
      // <Albom />
      <div className="app">
        <Cart
          addToCartProduct={this.state.productsListForCart}
          updateProductsInBasket={this.updateProductsInBasket}
          />
        <Modal />
        <ProductsGrid addToCartProduct={this.transferTheProductToTheBasket} />
        {/* <ModalMaterial /> */}
      </div>
    );
  }
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
