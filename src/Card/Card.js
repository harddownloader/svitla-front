import React, { Component } from 'react';

import './Card.scss'

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="card-container">
                <div className="card-head">
                    <h3>Ваш заказ</h3>
                </div>
                <div className="card-body">
                    <div className="card-table">
                        <div className="table-heading"></div>
                        <div className="table-content list">
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
                        </div>
                        
                    </div>
                </div>
                <div className="card-footer">
                    <p className="head-text">Сумма заказа: <strong>0</strong></p>
                </div>
            </div>
        )
    }
}

export default Card;