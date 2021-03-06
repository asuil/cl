import React from 'react';
import useIsMobile from './hooks/useIsMobile';
import Header from './sections/Header';
import Body from './sections/Body';
import Footer from './sections/Footer';
import Div from './wrappers/Div';
import Text from './wrappers/Text';
import Guide from './components/Guide';
import { Color as c, Font as f } from './utils';

const Main = () => {
  const [mobile] = useIsMobile(600);
  return (
    <Text color={c.WHITE} font={f.REGULAR}>
      <Body mobile={mobile} />
      <Footer />
      <Header />
      {mobile
        ? (
          <div />
        ) : (
          <Div right bottom p={5}>
            <Guide mobile={mobile} />
          </Div>
        )
      }
    </Text>
  );
};

export default Main;
