import React, { Component } from 'react';

import './CardItem.scoped.scss'

class CardIten extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="list-item">
                <div className="product-buttons">
                    <span className="delete-btn btn"></span>
                </div>
                <div className="product-img">
                    <img src="" alt="" />
                </div>
                <div className="product-name">
                    <span>Name</span>
                </div>
                <div className="product-quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="/assets/icons/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" defaultValue="1" />
                    <button className="minus-btn" type="button" name="button">
                        <img src="/assets/icons/minus.svg" alt="" />
                    </button>
                </div>
                <div className="product-cost">0 рублей</div>
            </div>
        )
    }
}

export default CardIten;