import React from 'react';

function  GlitchText (props) {
  
  const dynamicStyle = {
    fontSize: props.size,
  };

  return (
    <h1 className={`glitchs  text-gray-300`} style={dynamicStyle} >
      <span aria-hidden="true">{props.heading}</span>
      {props.heading}
      <span aria-hidden="true">{props.heading}</span>
    </h1>
  );
};

export default GlitchText;