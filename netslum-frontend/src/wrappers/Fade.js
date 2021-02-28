import { arrayOf, bool, element, number, oneOfType } from 'prop-types';
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
    if (auto) setTimeout(() => setOpacity(initialShow ? 0 : 100), delay);
  }, []);

  return (
    <div
      aria-label="Fade"
      style={{
        opacity: opacity,
        transitionProperty: 'opacity',
        transitionDuration: `${duration || 800}ms`,
        transitionTimingFunction: 'linear',
        transitionDelay: `${(!auto && delay) || 0}ms`,
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
  children: oneOfType([element, arrayOf(element)]),
};

export default Fade;
