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
  }

  render() {
    return (
      // <Albom />
      <div>
        <Card />
        <Modal />
        <ProductsGrid />
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
