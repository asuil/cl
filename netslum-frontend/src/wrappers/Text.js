import React from 'react';

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

export default Text;
