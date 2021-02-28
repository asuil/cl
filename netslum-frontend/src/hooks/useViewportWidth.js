import { useState, useLayoutEffect } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
  }, []);

  return width;
};

export default useViewportWidth;
