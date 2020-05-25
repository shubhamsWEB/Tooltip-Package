import React, { useState, useEffect } from "react";
import "./style.css";
export default ({children}) => {
  const [txt, setTxt] = useState(children.props.text);
  const [classN,setClassN] = useState(children.props.className);
  const [position,setPosition] = useState(children.props.position);
  const CreateTooltip = () => {
    return React.cloneElement(children, {className: `${classN} hint hint--${position}`,datahint: `${txt}`});
  };
  return CreateTooltip();
};
