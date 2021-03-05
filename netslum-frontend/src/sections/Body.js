import React from 'react';
import { bool } from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Text from '../wrappers/Text';
import Index from '../pages/Index';

const Body = ({ mobile }) => {
  const [tooSmall] = useIsMobile(300);

  return tooSmall
    ? (
      <Div px={3} center h="100vh" bgcolor={c.SOFT_BROWN}>
        <Text size={1.2} center>
          Su pantalla es muy pequeña como para mostrar el contenido correctamente,
          intente con otro dispositivo!
        </Text>
      </Div>
    ) : (
      <Router>
        <Switch>
          <Route path="/long">
            <Div h="200vh" />
          </Route>
          <Route path="/">
            <Index mobile={mobile} />
          </Route>
        </Switch>
      </Router>
    );
};

Body.propTypes = {
  mobile: bool,
};

Body.defaultProps = {
  mobile: false,
};

export default Body;
