import {
  arrayOf, bool, element, func, number, oneOfType, string, objectOf,
} from 'prop-types';
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
  const finalStyle = {
    display: (flex || alignRight || center) && 'flex',
    flexDirection: center && 'column',
    justifyContent: (alignRight && 'flex-end') || (center && 'center'),
    alignItems: center && 'center',
    backgroundColor: bgcolor,
    paddingLeft: pl * spacingStep || px * spacingStep || p * spacingStep || false,
    paddingRight: pr * spacingStep || px * spacingStep || p * spacingStep || false,
    paddingTop: pt * spacingStep || py * spacingStep || p * spacingStep || false,
    paddingBottom: pb * spacingStep || py * spacingStep || p * spacingStep || false,
    marginLeft: ml * spacingStep || mx * spacingStep || m * spacingStep || false,
    marginRight: mr * spacingStep || mx * spacingStep || m * spacingStep || false,
    marginTop: mt * spacingStep || my * spacingStep || m * spacingStep || false,
    marginBottom: mb * spacingStep || my * spacingStep || m * spacingStep || false,
    width: w,
    height: h,
    cursor: onClick && 'pointer',
    top: top && 0,
    bottom: bottom && 0,
    right: !(top || bottom || left || right) || (left ? 'auto' : 0),
    left: !(top || bottom || left || right) || (right ? 'auto' : 0),
    position: (top || bottom || left || right) && 'fixed',
    ...style,
  };
  return onClick
    ? (
      <div
        aria-label="Div"
        style={finalStyle}
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}
        role="button"
      >
        {children}
      </div>
    ) : (
      <div
        aria-label="Div"
        style={finalStyle}
      >
        {children}
      </div>
    );
};

Div.propTypes = {
  bgcolor: string,
  flex: bool,
  alignRight: bool,
  center: bool,
  onClick: func,
  p: number,
  px: number,
  py: number,
  pt: number,
  pb: number,
  pr: number,
  pl: number,
  m: number,
  mx: number,
  my: number,
  mt: number,
  mb: number,
  mr: number,
  ml: number,
  w: oneOfType([number, string]),
  h: oneOfType([number, string]),
  top: bool,
  bottom: bool,
  left: bool,
  right: bool,
  spacing: number,
  style: objectOf(),
  children: oneOfType([element, arrayOf(element)]),
};

Div.defaultProps = {
  bgcolor: undefined,
  flex: undefined,
  alignRight: undefined,
  center: undefined,
  onClick: undefined,
  p: undefined,
  px: undefined,
  py: undefined,
  pt: undefined,
  pb: undefined,
  pr: undefined,
  pl: undefined,
  m: undefined,
  mx: undefined,
  my: undefined,
  mt: undefined,
  mb: undefined,
  mr: undefined,
  ml: undefined,
  w: undefined,
  h: undefined,
  top: undefined,
  bottom: undefined,
  left: undefined,
  right: undefined,
  spacing: undefined,
  style: undefined,
  children: undefined,
};

export default Div;
