import React from 'react';
import { bool } from 'prop-types';
import { Color as c } from '../utils';
import Guide from '../components/Guide';
import Text from '../wrappers/Text';
import Div from '../wrappers/Div';

const Index = ({
  mobile,
}) => (
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

Index.propTypes = {
  mobile: bool,
};

Index.defaultProps = {
  mobile: false,
};

export default Index;
