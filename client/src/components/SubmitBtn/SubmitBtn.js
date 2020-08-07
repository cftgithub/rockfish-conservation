import React from "react";
import "./SubmitBtn.css";

export function SubmitBtn(props) {
  return (
    <button
      className='btn submit-btn btn-lg align-items-center'
      {...props}
      tabIndex='0'
      type='submit'
      onSubmit={ props.handleFormSubmit }>
      Submit
    </button>
  );
}

