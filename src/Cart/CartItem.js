import React, { Component } from 'react';

import './CartItem.scoped.scss'

class CartIten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            qta: 1
        }
    }

    // getTotalCost = () => {
    //     return (this.props.price * this.state.product.qta)
    // }

    deleteProductFromCart = () => {
        this.props.deleteProductFunc(this.state.product)
    }

    changeQtaByInput = (e) => {
        this.setState({qta: e.target.value});
    }

    changeQtaCount = (type) => {
        console.log('changeQtaCount', type)
        let qta = this.state.qta;
        // const product = this.state.product
        if (type === 'minus') {
            const qtaMinus = this.checkQtaLimit(qta-1);
            console.log('qtaMinus', qtaMinus)
            this.setState({qta: qtaMinus});
        } else if (type === 'plus') {
            const qtaPlus = this.checkQtaLimit(qta+1)
            console.log('qtaPlus', qtaPlus)
            this.setState({qta: qtaPlus});

        } else {
            console.log(`Error: incorrect type, type = ${type}`)
        }
    }
    
    checkQtaLimit = (qta) => {
        if (qta < 1) {
            return 1;
        } else if (qta >= 100) {
            return 100;
        } else {
            return qta;
        }
    }

    render() {
        return(
            <div className="list-item">
                <div className="product-buttons">
                    <span className="delete-btn btn" onClick={this.deleteProductFromCart}></span>
                </div>
                <div className="product-img">
                    <img src={this.state.product.imageUrl} alt={this.state.product.imageAlt} />
                </div>
                <div className="product-name">
                    <span>{this.state.product.name}</span>
                </div>
                <div className="product-quantity">
                    <button className="plus-btn" type="button" name="button" onClick={this.changeQtaCount.bind(this, 'plus')}>
                        <img src="/assets/icons/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value={this.state.qta} onChange={this.changeQtaByInput}/>
                    <button className="minus-btn" type="button" name="button" onClick={this.changeQtaCount.bind(this, 'minus')}>
                        <img src="/assets/icons/minus.svg" alt="" />
                    </button>
                </div>
                <div className="product-cost">{/*this.state.product.totalCost*/} рублей</div>
            </div>
        )
    }
}

export default CartIten;