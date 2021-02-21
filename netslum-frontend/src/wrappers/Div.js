import { useState } from "react";

const Div = ({
  bgcolor,
  color,
  flex,
  onClick,
  p, px, py, pt, pb, pr, pl,
  m, mx, my, mt, mb, mr, ml,
  w, h,
  spacing,
  style,
  children,
}) => {
  const [spacingStep] = useState(spacing || 8);
  const [padding] = useState(p * spacingStep || 0);
  const [margin] = useState(m * spacingStep || 0);
  const [finalStyle] = useState({
    display: flex ? 'flex' : 'block',
    backgroundColor: bgcolor || 'transparent',
    color: color || 'inherit',
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
    width: w || 'auto',
    height: h || 'auto',
    cursor: onClick ? 'pointer' : 'inherit',
    ...style,
  });
  return (
    <div
      style={finalStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Div;
