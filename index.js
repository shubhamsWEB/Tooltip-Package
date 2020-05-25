import React, { useState, useEffect } from "react";
import "./style.css";
export default ({ children, text, position, type, size, animation }) => {
  const [txt, setTxt] = useState(text);
  const [classN, setClassN] = useState(children.props.className);
  const [pos, setPosition] = useState(position);
  const [typ, setType] = useState(type);
  const [siz, setSize] = useState(size);
  const [animate, setAnimation] = useState(animation);
  const CreateTooltip = () => {
    return React.cloneElement(children, {
      className: `${classN} tooltip tooltip--${pos} tooltip--${typ} tooltip--${siz} tooltip--${animate}`,
      datahint: `${txt}`,
    });
  };
  return CreateTooltip();
};
