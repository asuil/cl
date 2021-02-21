import {useEffect, useState} from "react";

const Fade = ({
    show,
    auto,
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
    <div style={{ opacity: opacity, transition: `opacity 1.5s` }}>
      {children}
    </div>
  );
};

export default Fade;
