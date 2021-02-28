import React from 'react';
import Guide from '../components/Guide';
import useIsMobile from '../hooks/useIsMobile';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';

const Body = () => {
  const [mobile] = useIsMobile(600);
  const [tooSmall] = useIsMobile(300);

  return tooSmall
    ? (
      <Div px={3} center h="100vh" bgcolor={c.SOFT_BROWN}>
        <Text size={1.2} center>
          Su pantalla es muy pequeña como para mostrar el contenido correctamente, intente con otro dispositivo!
        </Text>
      </Div>
    ) : (
      <Div px={mobile ? 0 : 6} py={16} bgcolor={c.SOFT_BROWN}>
        {mobile
          ? (
            <Guide />
          ) : (
            <Text size={3}>
              contenido
            </Text>
          )
        }
      </Div>
    );
};

export default Body;
