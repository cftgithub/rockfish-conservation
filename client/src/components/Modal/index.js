import React from "react";
import fish from '../../fish.json';
import "./style.css";

const Modal = ({ handleClose, show, children, props }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} id={props.id}>
          <section className="modal-main">
            {children}
            <button onClick={handleClose}>Close</button>
          </section>
        </div>
    );


    // // CHIAFONGS STUFF >>>
    //     state={
    //         fish,
    //         modalIdTag: 1
    //     }

    //     handleClick = () => {
    //         this.props.onClick(this.props.id)
    //     };

    //     modalId = id => {
    //         const selected = this.state.fish.filter((modal) => modal.id === id);
    //         // this.state.modalIdTag = selected[0].id
    //         console.log(selected);
    //     }; 

    //     render() {
    //         return (
    //             <>
                
    //             <button type="button" className="btn btn-primary" data-toggle="modal" data-target={this.state.modalIdTag} onClick={this.modalId}>
    //                 Learn More
    //             </button>

    //             <div className="modal fade" id={this.state.modalIdTag} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    //                 <div className="modal-dialog modal-dialog-centered" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="exampleModalCenterTitle">{this.props.title}</h5>
    //                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                                 <span aria-hidden="true">&times;</span>
    //                             </button>
    //                         </div>
    //                         <div className="modal-body">
    //                             ...
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             </>
    //         );
    //     }
    // // <<<
}

export default Modal;
