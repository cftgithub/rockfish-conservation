import React from "react";
import "./style.css";

class Modal extends React.Component {
  
// toggleModal = e => {
//     this.props.onClick(this.props.show); 
// };

hideModal = () => {
    this.props.onClick(this.props.show);
}

render() {
    if(!this.props.show) {
        return null;
    }

    return (        
        <>
        <div id="modal">
            <h5>{this.props.children}</h5>
        </div>
        <div>
            <button onClick={this.hideModal}>&times;</button>
        </div>
        </>
    );
}
}

export default Modal;
