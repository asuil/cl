import { useState, useEffect } from 'react';
import useViewportWidth from './useViewportWidth';

const useIsMobile = (limit) => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useViewportWidth();

  useEffect(() => {
    setIsMobile(width < limit);
  }, [width]);

  return [isMobile, width];
};

export default useIsMobile;
