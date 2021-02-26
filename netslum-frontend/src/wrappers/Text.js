import React from 'react';
import { arrayOf, number, string, element, oneOfType } from 'prop-types';

const Text = ({
  size,
  color,
  font,
  children,
}) => {
  return (
    <div
      aria-label="Text"
      style={{
        fontSize: size && `${size}rem`,
        fontFamily: font,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

Text.propTypes = {
  size: number,
  color: string,
  font: string,
  children: oneOfType([element, arrayOf(element), string]),
};

export default Text;
