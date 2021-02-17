import React, { useState } from "react";

/**
 * div extended to have functionalities as shortcuts
 * @param bc:             <string>            css background-color
 * @param p:              <integer>           css padding
 * @param px:             <integer>           css padding-left & padding-right
 * @param py:             <integer>           css padding-top & padding-bottom
 * @param m:              <integer>           css margin
 * @param w:              <integer/string>    css width
 * @param s:              <integer>           pixels to multiply p and m for
 * @param centerContent:  <boolean>           centers content
 * @param children:       <array(component)>  React children
 * @returns {JSX.Element} Div wrapper
 * @constructor --
 */
const Div = ({
  bgcolor,
  color,
  p, px, py,
  m,
  w,
  s,
  centerContent,
  children,
}) => {
  const [spacingStep] = useState(s || 8);
  const [padding] = useState(p * spacingStep || 0);
  const [style] = useState({
    backgroundColor: bgcolor || 'transparent',
    color: color || 'inherit',
    padding: padding,
    paddingLeft: px * spacingStep || padding,
    paddingRight: px * spacingStep || padding,
    paddingTop: py * spacingStep || padding,
    paddingBottom: py * spacingStep || padding,
    margin: m * spacingStep || 0,
    width: w || 'auto',
  });
  return (
    <div
      style={centerContent ? {
        ...style,
        display: 'flex',
        justifyContent: 'center',
      } : style}
    >
      <div>
        {children}
      </div>
    </div>
  );
};

export default Div;
