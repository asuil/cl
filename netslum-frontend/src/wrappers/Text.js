import { arrayOf, element, number, oneOfType, string, bool } from 'prop-types';
import React from 'react';

const Text = ({
  size,
  color,
  font,
  center,
  children,
}) => {
  return (
    <div
      aria-label="Text"
      style={{
        fontSize: size && `${size}rem`,
        fontFamily: font,
        textAlign: center && 'center',
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
  center: bool,
  children: oneOfType([element, arrayOf(element), string]),
};

export default Text;
