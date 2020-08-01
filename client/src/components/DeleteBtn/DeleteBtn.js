import React from'react';
import './DeleteBtn.css';

function DeleteBtn(props) {
    return (
        
        <span className='btn delete-btn text-light btn-sm float-right' {...props} role='button' tabIndex='0'>
            Delete
        </span>
    );
}

export default DeleteBtn;