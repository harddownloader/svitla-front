import React, { Component } from 'react';

import './Card.scss'
import CardItem from './CardItem'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // productsInCard: [],
      productsInCard: this.props.addToCardProduct
    }
  }

  addToCardProduct = (product) => {
    console.log(product)
    // данный товар есть в корзине?
    // если есть , то меняем у него только кол-во
    // если нет то добавляем в массив корзины
    // if(this.state.productsInCard.length > 0) {
      
    //   let findDuplicate = false
    //   this.state.productsInCard.map( (productItem, index) => {
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
    // this.state.productsInCard.push(product)
    console.log('product', product)
    let tmpArr = this.state.productsInCard
    console.log(tmpArr)
    tmpArr.push(product)
    // this.setState({productsInCard: tmpArr})
  }
    
    
  // changeQtaForDuplicate = (currentQta, itNumberInList) => {
  //   this.setState(prevState => ({

  //     // productsInCard: prevState.productsInCard.map(el => {
  //     //     el.itNumberInList === itNumberInList ? { ...el, qta: currentQta++ }: el
  //     //   }
  //     // )
  //     productsInCard: [
  //       ...prevState.productsInCard,
  //       prevState.productsInCard[itNumberInList]: currentQta,
  //     ]
    
    
  //   }))
  // }

  deleteProductFromCart = (product) => {
    // console.log(product)
    const tmpProductsInCard = this.state.productsInCard
    for(let i=0;i<tmpProductsInCard.length;i++) {
     if( tmpProductsInCard[i].sku === product.sku ) tmpProductsInCard.splice(i, 1)
    }
    this.setState({
      productsInCard: tmpProductsInCard
    })
  }

  render() {
    // console.log(this.props.addToCardProduct)
    let ListContent = <div></div>
    if (this.props.addToCardProduct.name !== null) {
      // console.log(this.props.addToCardProduct)

      console.log(this.props)
      // this.addToCardProduct(this.props.addToCardProduct)

      ListContent = this.state.productsInCard.map((product, index) => {
        return <CardItem key={index} product={product} deleteProductFunc={this.deleteProductFromCart} />
        // return <div key={index}>item</div>
        // return <Test key={index} product={product} />
      })
    }
    

    return(
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card-header">
            <h3 className="card-heading">Ваш заказ</h3>
          </div>
          <div className="card-body">
            <div className="card-table">
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
          <div className="card-footer">
              <p className="head-text">Сумма заказа: <strong className="total-price">0</strong></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
