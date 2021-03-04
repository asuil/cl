import React from 'react';
import { bool } from 'prop-types';
import { Color as c, Direction as d, ImageSize as is } from '../utils';
import Div from '../wrappers/Div';
import Fade from '../wrappers/Fade';
import Slide from '../wrappers/Slide';
import Dialogue from './Dialogue';
import Resident from './Resident';

const dialogues = [
  'Hola Mundo!',
  'Bienvenidxs al netslum de asuil.cl!',
  'Este espacio existe para manejar información online para tus proyectos de una manera más cómoda y...',
  '¡TOTALMENTE GRATIS!',
  'Para comenzar solo presiona aquí y regístrate!',
];

const MyDialogue = ({
  mobile,
}) => (
  <Fade auto delay={500}>
    <Div bgcolor={c.BLACK} w={mobile ? 280 : 250}>
      <Dialogue
        dialogues={dialogues}
      />
    </Div>
  </Fade>
);

MyDialogue.propTypes = {
  mobile: bool,
};

MyDialogue.defaultProps = {
  mobile: false,
};

const MyResident = ({
  mobile,
}) => (
  <Fade auto>
    <Resident src="r0" size={mobile ? is.BIG : is.MEDIUM} />
  </Fade>
);

MyResident.propTypes = {
  mobile: bool,
};

MyResident.defaultProps = {
  mobile: false,
};

const Guide = ({
  mobile,
}) => (
  mobile
    ? (
      <Div center>
        <MyResident mobile={mobile} />
        <MyDialogue mobile={mobile} />
      </Div>
    ) : (
      <Div flex>
        <Div center>
          <Slide auto delay={500} from={d.RIGHT}>
            <MyDialogue mobile={mobile} />
          </Slide>
        </Div>
        <Slide auto from={d.RIGHT}>
          <MyResident mobile={mobile} />
        </Slide>
      </Div>
    )
);

Guide.propTypes = {
  mobile: bool,
};

Guide.defaultProps = {
  mobile: false,
};

export default Guide;
