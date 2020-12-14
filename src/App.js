import React, { Component } from "react";
import ReactDOM from 'react-dom'

import './App.scss';
// import Albom from './Album'
import Modal from './Modal/Modal'

class App extends Component {
  constructor() {
    super()
    this.products = [
      {
        name: 'Product 1',
        price: '99.00',
        imageUrl: '/product1.jpg'
      },
      {
        name: 'Product 2',
        price: '105.00',
        imageUrl: '/product2.jpg'
      },
      {
        name: 'Product 3',
        price: '129.00',
        imageUrl: '/product3.jpg'
      },
    ]
  }

  render() {
    return (
      // <Albom />
      <div>
        <Modal />
      </div>
    );
  }
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
