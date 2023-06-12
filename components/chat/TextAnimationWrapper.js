import React from 'react';
import Typewriter from 'react-type-animation';

const TextAnimationWrapper = ({ text }) => {
    console.log(text)
  return <div>
    <Typewriter typing={1}>{text}</Typewriter>
  </div>
};

export default TextAnimationWrapper;
