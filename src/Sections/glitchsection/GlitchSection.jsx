import React from 'react';
import "./glitchsection.css"

function  GlitchSectionText (props) {
  
  const dynamicStyle = {
    fontSize: props.size,
  };

  return (
    <h1 className={`glitch  text-gray-300`} style={dynamicStyle} >
      <span aria-hidden="true">{props.heading}</span>
      {props.heading}
      <span aria-hidden="true">{props.heading}</span>
    </h1>
  );
};

export default GlitchSectionText;