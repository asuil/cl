import { useState, useEffect } from 'react';
import useViewportWidth from './useViewportWidth';

const useIsMobile = (limit) => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useViewportWidth();

  useEffect(() => {
    if (width < limit !== isMobile) setIsMobile(width < limit);
  }, [width]);

  return  [isMobile];
};

export default useIsMobile;
