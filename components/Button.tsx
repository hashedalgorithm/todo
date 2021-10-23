import React, { MouseEventHandler } from "react";
type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler;
  cName?: string;
};
const Button = ({ text, onClick, cName }: ButtonProps) => {
  return (
    <button
      className={cName}
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        color: "var(--secondary)",
        fontWeight: 600,
        backgroundColor: "var(--primary)",
        outline: "none",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "0 1rem",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
{
  /* <i className="fas fa-plus-square"></i> */
}
