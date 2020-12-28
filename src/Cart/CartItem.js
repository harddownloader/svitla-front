import React, { Component } from 'react';

import './CartItem.scoped.scss'

class CartItem extends Component {
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

    deleteProductFromCart = (product) => {
        this.props.deleteProductFunc(product)
    }

    changeQtaByInput = (e) => {
        this.setState({qta: e.target.value});
    }

    changeQtaCount = (type, currentQta) => {
        console.log('changeQtaCount', type)
        console.log('currentQta', currentQta)
        // let qta = this.props.product.qta;
        let qta = currentQta;
        // const product = this.state.product
        if (type === 'minus') {
            const qtaMinus = this.checkQtaLimit(qta-1);
            console.log('qtaMinus', qtaMinus)
            // this.setState({qta: qtaMinus});
            this.props.product.qta = qtaMinus
        } else if (type === 'plus') {
            console.log('product list', this.props.product )
            qta = Number(qta) + 1 
            // const qtaPlus = this.checkQtaLimit(qta+1)
            console.log('qtaPlus', qta)
            // this.setState({qta: qtaPlus});
            this.props.product.qta = qta
            console.log('this.props.product.qta', this.props.product.qta)
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
                    <span className="delete-btn btn" onClick={this.deleteProductFromCart.bind(this, this.props.product)}></span>
                </div>
                <div className="product-img">
                    <img src={this.props.product.imageUrl} alt={this.props.product.imageAlt} />
                </div>
                <div className="product-name">
                    <span>{this.props.product.name}</span>
                </div>
                <div className="product-quantity">
                    <button className="plus-btn" type="button" name="button" onClick={this.changeQtaCount.bind(this, 'plus', this.props.product.qta)}>
                        <img src="/assets/icons/plus.svg" alt="" />
                    </button>
                    {/* <input type="text" name="name" value={this.props.qta} onChange={this.changeQtaByInput}/> */}
                    {/* ставим спан чтобы было безопаснее */}

                    <span>{this.props.product.qta}</span>

                    <button className="minus-btn" type="button" name="button" onClick={this.changeQtaCount.bind(this, 'minus')}>
                        <img src="/assets/icons/minus.svg" alt="" />
                    </button>
                </div>
                <div className="product-cost">{/*this.state.product.totalCost*/} рублей</div>
            </div>
        )
    }
}

export default CartItem;