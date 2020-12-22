import React, { Component } from "react";
import ReactDOM from 'react-dom'

import './App.scss';
// import Albom from './Album'
import Modal from './Modal/Modal'
// import ModalMaterial from './Modal/ModalMaterial'
import ProductsGrid from './Products/ProductsGrid'
import Cart from './Cart/Cart'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // productForCart: {
      //   name: null,
      //   price: null,
      //   imageUrl: null,
      //   imageAlt: null,
      //   sku: null
      // }
      productsListForCart: []
    }
  }

  transferTheProductToTheBasket = (product) => {
    console.log(product)
    // this.setState(prevState => ({
    //   productForCart: {
    //     ...prevState.productForCart,
    //     name: product.name,
    //     price: product.price,
    //     imageUrl: product.imageUrl,
    //     imageAlt: product.imageAlt,
    //     sku: product.sku
    //   }
    // }))
    const currentProductList = this.state.productsListForCart
    currentProductList.push(product)
    this.setState({productsListForCart: currentProductList})
  }

  render() {
    return (
      // <Albom />
      <div className="app">
        <Cart addToCartProduct={this.state.productsListForCart}/>
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
