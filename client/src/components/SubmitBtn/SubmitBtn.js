import React from "react";
import "./SubmitBtn.css";

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

