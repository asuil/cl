import React, { useState } from 'react';
import { Color as c, Font as f, Netsulm } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

const Header = () => {
  const [title] = useState(Netsulm());
  return (
    <Div top bgcolor={c.BROWN} px={3} py={2}>
      <Text size={2} font={f.MONOSPACE}>
        {title}
      </Text>
    </Div>
  );
};

export default Header;
