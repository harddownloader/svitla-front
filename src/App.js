import React, { Component } from "react";
import ReactDOM from 'react-dom'

import './App.scss';
// import Albom from './Album'
import Modal from './Modal/Modal'
// import ModalMaterial from './Modal/ModalMaterial'
import ProductsGrid from './Products/ProductsGrid'
import Card from './Card/Card'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // productForCard: {
      //   name: null,
      //   price: null,
      //   imageUrl: null,
      //   imageAlt: null,
      //   sku: null
      // }
      productsListForCard: []
    }
  }

  transferTheProductToTheBasket = (product) => {
    console.log(product)
    // this.setState(prevState => ({
    //   productForCard: {
    //     ...prevState.productForCard,
    //     name: product.name,
    //     price: product.price,
    //     imageUrl: product.imageUrl,
    //     imageAlt: product.imageAlt,
    //     sku: product.sku
    //   }
    // }))
    const currentProductList = this.state.productsListForCard
    currentProductList.push(product)
    this.setState({productsListForCard: currentProductList})
  }

  render() {
    return (
      // <Albom />
      <div className="app">
        <Card addToCardProduct={this.state.productsListForCard}/>
        <Modal />
        <ProductsGrid addToCardProduct={this.transferTheProductToTheBasket} />
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
