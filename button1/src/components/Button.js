import React from "react";
import "./button.css";

const Button = ({ children, ...props }) => {
  const variantColor =
    props.variantColor && props.variantColor !== true
      ? "variantColor-" + props.variantColor
      : "";
  const size =
    props.size && props.size !== true ? "size-" + props.size : "size-md";
  const variant =
    props.variant && props.variant !== true
      ? "variant-" + props.variant
      : "variant-solid";

  return (
    <button className={`btn ${variantColor} ${size} ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
