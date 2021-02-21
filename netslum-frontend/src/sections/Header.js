import { useState } from 'react';
import Div from "../wrappers/Div";
import Text from "../wrappers/Text";

import { Color as c, Font as f } from "../utils";

const Header = () => {
  const [ch3] = useState(Math.random() > 0.6 ? '3' : 'e');
  const [ch4] = useState(Math.random() > 0.9 ? '\\' : 't');
  const [ch6] = useState(Math.random() > 0.9 ? '!' : 'l');
  const [ch7] = useState(Math.random() > 0.7 ? '¿' : 'u');
  return (
    <Div bgcolor={c.BROWN} px={3} py={2}>
      <Text size={2} color={c.WHITE} font={f.MONOSPACE}>
        {`./n${ch3}${ch4}s${ch6}${ch7}m`}
      </Text>
    </Div>
  );
};

export default Header;
