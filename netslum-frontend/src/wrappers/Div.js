import { arrayOf, bool, element, func, number, object, oneOfType, string } from 'prop-types';
import React, { useState } from 'react';

const Div = ({
  bgcolor,
  flex, alignRight, center,
  onClick,
  p, px, py, pt, pb, pr, pl,
  m, mx, my, mt, mb, mr, ml,
  w, h,
  top, bottom, left, right,
  spacing,
  style,
  children,
}) => {
  const [spacingStep] = useState(spacing || 8);
  const [padding] = useState(p * spacingStep || false);
  const [margin] = useState(m * spacingStep || false);
  const [finalStyle] = useState({
    display: (flex || alignRight || center) && 'flex',
    flexDirection: center && 'column',
    justifyContent: (alignRight && 'flex-end') || (center && 'center'),
    backgroundColor: bgcolor,
    padding: padding,
    paddingLeft: pl * spacingStep || px * spacingStep || padding,
    paddingRight: pr * spacingStep || px * spacingStep || padding,
    paddingTop: pt * spacingStep || py * spacingStep || padding,
    paddingBottom: pb * spacingStep || py * spacingStep || padding,
    margin: margin,
    marginLeft: ml * spacingStep || mx * spacingStep || margin,
    marginRight: mr * spacingStep || mx * spacingStep || margin,
    marginTop: mt * spacingStep || my * spacingStep || margin,
    marginBottom: mb * spacingStep || my * spacingStep || margin,
    width: w,
    height: h,
    cursor: onClick && 'pointer',
    top: top && 0,
    bottom: bottom && 0,
    right: !(top || bottom || left || right) || (left ? 'auto' : 0),
    left: !(top || bottom || left || right) || (right ? 'auto' : 0),
    position: (top || bottom || left || right) && 'fixed',
    ...style,
  });
  return (
    <div
      aria-label="Div"
      style={finalStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Div.propTypes = {
  bgcolor: string,
  flex: bool, alignRight: bool, center: bool,
  onClick: func,
  p: number, px: number, py: number, pt: number, pb: number, pr: number, pl: number,
  m: number, mx: number, my: number, mt: number, mb: number, mr: number, ml: number,
  w: number, h: number,
  top: bool, bottom: bool, left: bool, right: bool,
  spacing: number,
  style: object,
  children: oneOfType([element, arrayOf(element)]),
};

export default Div;
