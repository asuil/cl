import { useState, useEffect } from 'react';
import useViewportWidth from './useViewportWidth';

const useIsMobile = (limit, getWidth) => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useViewportWidth();

  useEffect(() => {
    if (width < limit !== isMobile) setIsMobile(width < limit);
  }, [width]);

  return getWidth ? [isMobile, width] : [isMobile];
};

export default useIsMobile;
