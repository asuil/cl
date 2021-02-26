import React from 'react';
import { string } from 'prop-types';

const Resident = ({
  src,
}) => (
  <img
    width={200}
    src={`${process.env.PUBLIC_URL}/img/${src}.svg`}
    alt="ilustración residente"
  />
);

Resident.propTypes = {
  src: string,
};

export default Resident;
