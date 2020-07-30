import React from'react';
import './DeleteBtn.css';

function DeleteBtn(props) {
    return (
        
        <span className='delete-btn bg-danger text-dark btn-sm float-right' {...props} role='button' tabIndex='0'>
            Delete
        </span>
    );
}

export default DeleteBtn;