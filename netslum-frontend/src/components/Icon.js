import { string, number } from 'prop-types';
import React from 'react';
import Text from '../wrappers/Text';

const Icon = ({
  name,
  size,
  color,
}) => (
  <Text size={size} color={color}>
    <span className="material-icons">{name}</span>
  </Text>
);

Icon.propTypes = {
  name: string,
  size: number,
  color: string,
};

Icon.defaultProps = {
  name: 'report_problem',
  size: undefined,
  color: undefined,
};

export default Icon;
