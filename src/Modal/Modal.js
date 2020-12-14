import React, { Component } from "react";
import './Modal.scss'

class Modal extends Component{
    constructor() {
        super()
        this.state = {
            isModalOpen: false,
        }
    }

    changeModalStatus = () => {
        const modalStatus = this.state.isModalOpen
        console.log('modalStatus', modalStatus)
        const needModalStatus = !modalStatus
        console.log('needModalStatus', needModalStatus)
        this.setState({isModalOpen: needModalStatus})
    }

    render() {
        return (
            <div>
                <div className="modal-container" style={this.state.isModalOpen ? {display: "block"} : {display: "none"}}>
                    <div className="modal-dialog">
                        <div className="modal-title">
                            <h3 className="modal-title__heading">Modal</h3>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body__content">
                                <p className="content-paragraph">Do you want to save information?</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-footer__btns">
                                <div className="btn-item">
                                    <button className="btn done" onClick={this.changeModalStatus}>Save</button>
                                </div>
                                <div className="btn-item">
                                    <button className="btn close" onClick={this.changeModalStatus}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={this.changeModalStatus}>Save</button>
            </div>
        )
    }
}

export default Modal
