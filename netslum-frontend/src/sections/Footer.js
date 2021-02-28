import React from 'react';
import Icon from '../components/Icon';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

const Footer = () => (
  <Div flex px={5} py={3} bgcolor={c.BLACK}>
    <Div pr={1}>
      <Icon name="copyright" />
    </Div>
    <Text>
      2021, asuil.cl by Ariel Suil Aravena
    </Text>
  </Div>
);

export default Footer;
