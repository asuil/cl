import { useState, createRef, useEffect } from 'react';
import { Direction as d } from "../utils";

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
    const newStyle = {...style};
    newStyle[from] = position;
    setStyle(newStyle);
  }, [position]);

  const out = () => (
    (from === d.RIGHT || from === d.LEFT)
      ? - (slideRef.current.clientWidth + 10)
      : - (slideRef.current.clientHeight + 10)
  );

  return (
    <div style={{ overflow: 'hidden' }}>
      <div ref={slideRef} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Slide;
