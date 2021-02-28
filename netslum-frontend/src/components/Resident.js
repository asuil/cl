import { string, number } from 'prop-types';
import React from 'react';

const Resident = ({
  src,
  size,
}) => (
  <img
    width={size}
    src={`${process.env.PUBLIC_URL}/img/${src}.svg`}
    alt="ilustración residente"
  />
);

Resident.propTypes = {
  src: string,
  size: number,
};

export default Resident;
