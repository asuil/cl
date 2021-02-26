import { arrayOf, bool, element, number, oneOfType } from 'prop-types';
import React, { useEffect, useState } from 'react';

const Fade = ({
  show,
  auto,
  duration,
  children,
}) => {
  const [opacity, setOpacity] = useState(show && !auto ? 100 : 0);

  useEffect(() => {
    if (auto === undefined) {
      if (show) setOpacity(100);
      else setOpacity(0);
    } else {
      if (auto > 100) setTimeout(() => setOpacity(100), auto);
      else setOpacity(100);
    }
  }, [show, auto]);

  return (
    <div aria-label="Fade" style={{ opacity: opacity, transition: `opacity ${duration || 1500}ms` }}>
      {children}
    </div>
  );
};

Fade.propTypes = {
  show: bool,
  duration: number,
  auto: number,
  children: oneOfType([element, arrayOf(element)]),
};

export default Fade;
