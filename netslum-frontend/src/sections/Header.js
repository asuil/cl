import React from 'react';
import { useState } from 'react';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

import { Color as c, Font as f, Netsulm } from '../utils';

const Header = () => {
  const [title] = useState(Netsulm());
  return (
    <Div bgcolor={c.BROWN} px={3} py={2}>
      <Text size={2} font={f.MONOSPACE}>
        {title}
      </Text>
    </Div>
  );
};

export default Header;
