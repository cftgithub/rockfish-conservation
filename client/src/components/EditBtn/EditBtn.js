import React from "react";
import "./EditBtn.css";

function EditBtn(props) {
  return (
    <span
      className='btn edit-btn text-light mr-2 btn-sm float-right'
      {...props}
      role='button'
      tabIndex='0'>
      Edit
    </span>
  );
}

export default EditBtn;
