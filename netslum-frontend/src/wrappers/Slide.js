import React from 'react';
import { useState, createRef, useEffect } from 'react';
import { Direction as d } from '../utils';
import { arrayOf, bool, element, number, oneOfType, string } from 'prop-types';

const Slide = ({
  show,
  from,
  auto,
  children,
}) => {
  const [position, setPosition] = useState(show && !auto ? 0 : -1000);
  const [style, setStyle] = useState({
    position: 'relative',
    transition: `${from} 1.5s`,
  });
  const slideRef = createRef();

  const out = () => (
    (from === d.RIGHT || from === d.LEFT)
      ? - (slideRef.current.clientWidth + 10)
      : - (slideRef.current.clientHeight + 10)
  );

  useEffect(() => {
    if (slideRef.current) {
      if (auto === undefined) {
        if (show) setPosition(0);
        else setPosition(out());
      } else {
        setPosition(out());
        setTimeout(() => setPosition(0), auto);
      }
    }
  }, [show, auto]);

  useEffect(() => {
    const newStyle = { ...style };
    newStyle[from] = position;
    setStyle(newStyle);
  }, [position]);

  return (
    <div aria-label="outerSlide" style={{ overflow: 'hidden' }}>
      <div aria-label="innerSlide" ref={slideRef} style={style}>
        {children}
      </div>
    </div>
  );
};

Slide.propTypes = {
  show: bool,
  from: string,
  auto: number,
  children: oneOfType([element, arrayOf(element)]),
};

export default Slide;
