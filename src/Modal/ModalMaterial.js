import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

class ModalMaterial extends Component {
    constructor() {
        super()
        this.useStyles = makeStyles((theme) => ({
            paper: {
                position: 'absolute',
                width: 400,
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
            },
        }));
        this.classes = this.useStyles();
        // getModalStyle is not a pure function, we roll the style only on the first render
        [this.modalStyle] = React.useState(this.getModalStyle);
        [this.open, this.setOpen] = React.useState(false);
    }

    rand() {
        return Math.round(Math.random() * 20) - 10;
    }
    
    getModalStyle() {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen = () => {
        this.setOpen(true);
    };

    handleClose = () => {
        this.setOpen(false);
    };

    render() {
        return (
            <div className="ModalMaterial">
                <button type="button" onClick={this.handleOpen}>
                    Open Modal
                </button>
                <Modal
                    open={this.open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={this.modalStyle} className={this.classes.paper}>
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalMaterial;