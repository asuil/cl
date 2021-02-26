import React from 'react';
import Slide from '../wrappers/Slide';
import { Color as c, Direction as d } from '../utils';
import Div from '../wrappers/Div';
import Fade from '../wrappers/Fade';
import Resident from './Resident';
import Dialogue from './Dialogue';

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
      <Slide auto={2000} from={d.RIGHT}>
        <Div bgcolor={c.BLACK} mt={5} w={250}>
          <Dialogue
            dialogues={dialogues}
            lastAction={() => {}}
          />
        </Div>
      </Slide>
      <Slide auto={200} from={d.RIGHT}>
        <Fade auto={200}>
          <Resident src="r0"/>
        </Fade>
      </Slide>
    </Div>
  );
};

export default Guide;
