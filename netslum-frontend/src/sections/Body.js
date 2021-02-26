import React from 'react';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

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
