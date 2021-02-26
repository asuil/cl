import React from 'react';
import Header from './sections/Header';
import Body from './sections/Body';
import Footer from './sections/Footer';
import Div from './wrappers/Div';
import Text from './wrappers/Text';
import Guide from './components/Guide';
import { Color as c, Font as f } from './utils';

const Main = () => (
  <Text color={c.WHITE} font={f.REGULAR}>
    <Body />
    <Footer />
    <Div top>
      <Header />
    </Div>
    <Div right bottom p={5}>
      <Guide />
    </Div>
  </Text>
);

export default Main;
