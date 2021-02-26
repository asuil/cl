import React from 'react';
import Text from '../wrappers/Text';

const Icon = (props) => (
  <Text {...props}>
    <span className="material-icons">{props.name}</span>
  </Text>
);

export default Icon;
