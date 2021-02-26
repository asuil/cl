import React from 'react';
import Text from '../wrappers/Text';
import Div from '../wrappers/Div';
import { Color as c } from '../utils';

const Body = () => {
  return (
    <Div px={6} py={16} bgcolor={c.SOFT_BROWN}>
      <Text size={3}>
        contenido
      </Text>
    </Div>
  );
};

export default Body;
