import {
  arrayOf, bool, element, number, oneOfType, string,
} from 'prop-types';
import React, { createRef, useEffect, useState } from 'react';
import { addDynamicKeyToObject, Direction as d } from '../utils';

const Slide = ({
  from,
  auto,
  initialShow,
  show,
  duration,
  delay,
  children,
}) => {
  const [position, setPosition] = useState(initialShow ? 0 : -300);
  const slideRef = createRef();

  const out = () => (
    (from === d.RIGHT || from === d.LEFT)
      ? -(slideRef.current.clientWidth + 10)
      : -(slideRef.current.clientHeight + 10)
  );

  useEffect(() => {
    if (show !== undefined) {
      if (show) {
        setPosition(0);
      } else {
        setPosition(out());
      }
    }
  }, [show]);

  useEffect(() => {
    if (auto) {
      const timer = setTimeout(() => setPosition(initialShow ? -500 : 0), delay);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, []);

  return (
    <div
      aria-label="outerSlide"
      style={{ overflow: 'hidden' }}
    >
      <div
        aria-label="innerSlide"
        ref={slideRef}
        style={addDynamicKeyToObject(from, position, {
          position: 'relative',
          transitionProperty: from,
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'ease',
          transitionDelay: (auto && 0) || `${delay}ms`,
        })}
      >
        {children}
      </div>
    </div>
  );
};

Slide.propTypes = {
  from: string,
  auto: bool,
  initialShow: bool,
  show: bool,
  duration: number,
  delay: number,
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

Slide.defaultProps = {
  from: d.LEFT,
  auto: undefined,
  initialShow: undefined,
  show: undefined,
  duration: 1000,
  delay: 0,
};

export default Slide;
