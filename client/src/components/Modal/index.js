import React from "react";
import "./style.css";

class Modal extends React.Component {

    hideModal = () => {
        this.props.onClick(this.props.show);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <>
                <div id="modal">
                    <h6>{this.props.children}</h6>
                    <button onClick={this.hideModal}>&times;</button>
                </div>
            </>
        );
    }
}

export default Modal;
