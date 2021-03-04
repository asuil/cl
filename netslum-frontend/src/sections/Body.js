import React from 'react';
import Guide from '../components/Guide';
import useIsMobile from '../hooks/useIsMobile';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';
import { bool } from 'prop-types';

const Body = ({ mobile }) => {
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
            <Guide mobile={mobile} />
          ) : (
            <Text size={3}>
              contenido
            </Text>
          )
        }
      </Div>
    );
};

Body.propTypes = {
  mobile: bool,
};

export default Body;
