import React from "react";
import "./SubmitBtn.css";

export function SubmitBtn(props) {
  return (
    <button
      className='btn submit-btn btn-lg align-items-center'
      {...props}
<<<<<<< HEAD
      role='button'
      tabIndex='0'>
=======
      tabIndex='0'
      type='submit'
      onSubmit={ props.handleFormSubmit }>
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
      Submit
    </button>
  );
}

