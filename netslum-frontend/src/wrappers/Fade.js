import {
  arrayOf, bool, element, number, oneOfType,
} from 'prop-types';
import React, { useEffect, useState } from 'react';

const Fade = ({
  auto,
  initialShow,
  show,
  duration,
  delay,
  children,
}) => {
  const [opacity, setOpacity] = useState(initialShow ? 100 : 0);

  useEffect(() => {
    if (show !== undefined) {
      if (show) {
        setOpacity(100);
      } else {
        setOpacity(0);
      }
    }
  }, [show]);

  useEffect(() => {
    if (auto) {
      const timer = setTimeout(() => setOpacity(initialShow ? 0 : 100), delay);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, []);

  return (
    <div
      aria-label="Fade"
      style={{
        opacity,
        transitionProperty: 'opacity',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'linear',
        transitionDelay: (auto && 0) || `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

Fade.propTypes = {
  auto: bool,
  initialShow: bool,
  show: bool,
  duration: number,
  delay: number,
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

Fade.defaultProps = {
  auto: undefined,
  initialShow: undefined,
  show: undefined,
  duration: 800,
  delay: 0,
};

export default Fade;
