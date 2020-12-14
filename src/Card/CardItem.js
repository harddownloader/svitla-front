import React, { Component } from 'react';

import './CardItem.scss'

class CardIten extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="list-item">
                <div className="product-img">
                    <img src="" alt=""/>
                </div>
                <div className="product-name">
                    <span>Name</span>
                </div>
                <div className="product-qty">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div className="product-cost">0 рублей</div>
            </div>
        )
    }
}

export default CardIten;