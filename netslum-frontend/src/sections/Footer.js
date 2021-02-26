import React from 'react';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

const Footer = () => (
  <Div px={5} py={3} bgcolor={c.BLACK}>
    <Text>
      © Ariel Suil Aravena, 2021
    </Text>
  </Div>
);

export default Footer;
