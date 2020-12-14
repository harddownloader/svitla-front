import React, { Component } from 'react';

import './Card.scss'
import CardItem from './CardItem'

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="card-container">
                <div className="card-header">
                    <h3 className="card-heading">Ваш заказ</h3>
                </div>
                <div className="card-body">
                    <div className="card-table">
                        <div className="table-heading">
                            <span>товар</span>
                            <span>Кол-во</span>
                            <span>Стоимость</span>
                        </div>
                        <div className="table-content list">
                            <CardItem />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <p className="head-text">Сумма заказа: <strong className="total-price">0</strong></p>
                </div>
            </div>
        )
    }
}

export default Card;