import React from 'react';
import { Color as c } from '../utils';
import Div from '../wrappers/Div';
import Fade from '../wrappers/Fade';
import Dialogue from './Dialogue';
import Resident from './Resident';

const dialogues = [
  'Hola Mundo!',
  'Bienvenidxs al netslum de asuil.cl!',
  'Este espacio existe para manejar información online para tus proyectos de una manera más cómoda y...',
  '¡TOTALMENTE GRATIS!',
  'Para comenzar solo presiona aquí y regístrate!',
];

const Guide = () => {
  return (
    <Div flex>
      <Div center>
        <Fade auto={1200}>
          <Div bgcolor={c.BLACK} w={250}>
            <Dialogue
              dialogues={dialogues}
              lastAction={() => {}}
            />
          </Div>
        </Fade>
      </Div>
      <Fade auto={200}>
        <Resident src="r0"/>
      </Fade>
    </Div>
  );
};

export default Guide;
