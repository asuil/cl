import {
  arrayOf, element, number, oneOfType, string, bool,
} from 'prop-types';
import React from 'react';

const Text = ({
  size,
  color,
  font,
  center,
  children,
}) => (
  <div
    aria-label="Text"
    style={{
      fontSize: `${size}rem`,
      fontFamily: font,
      textAlign: center && 'center',
      color,
    }}
  >
    {children}
  </div>
);

Text.propTypes = {
  size: number,
  color: string,
  font: string,
  center: bool,
  children: oneOfType([element, arrayOf(element), string]).isRequired,
};

Text.defaultProps = {
  size: 1,
  color: undefined,
  font: undefined,
  center: undefined,
};

export default Text;
