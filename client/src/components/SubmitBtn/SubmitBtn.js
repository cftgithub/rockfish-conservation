import React from "react";
import "./SubmitBtn.css";

export function Input(props) {
  return (
    <div className='form-group align-items-center'>
      <input className='form-control align-items-center' {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className='form-group'>
      <textarea className='form-control' rows='4' {...props} />
    </div>
  );
}


export function SubmitBtn(props) {
  return (
    <span
      className='submit-btn bg-success text-dark btn-sm align-items-center'
      {...props}
      role='button'
      tabIndex='0'>
      Submit
    </span>
  );
}

