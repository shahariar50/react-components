import React from "react";
import "./button.css";
import { Icon } from "@chakra-ui/core";

const Button = (props) => {
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
  const disabled = props.disabled ? "disabled" : "";

  const children = () => {
    if (props.leftIcon) {
      return (
        props.leftIcon !== true && (
          <>
            <Icon name={props.leftIcon} className="leftIcon" />
            {props.children}
          </>
        )
      );
    } else if (props.rightIcon) {
      return (
        props.rightIcon !== true && (
          <>
            {props.children}
            <Icon name={props.rightIcon} className="rightIcon" />
          </>
        )
      );
    }

    return props.children;
  };

  return (
    <button
      className={`btn ${variantColor} ${size} ${variant} ${disabled}`}
      disabled={props.disabled ? true : false}
    >
      {children()}
    </button>
  );
};

export default Button;
