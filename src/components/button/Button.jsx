import React from "react";
import PlayIcon from "../../assets/icons/play.png";
import "./Button.css";

const Button = ({ onClick, children, type, showIcon }) => {
  return (
    <button className={`action_btn ${type}`} type='button' onClick={onClick}>
      {showIcon && <img src={PlayIcon} alt='Play Icon' />}
      {children}
    </button>
  );
};

export default Button;
