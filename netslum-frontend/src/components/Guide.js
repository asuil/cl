import React from 'react';
import { Color as c, Direction as d } from '../utils';
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

const Guide = () => {
  return (
    <Div flex>
      <Div center>
        <Slide auto delay={800} from={d.RIGHT}>
          <Fade auto delay={800}>
            <Div bgcolor={c.BLACK} w={250}>
              <Dialogue
                dialogues={dialogues}
                lastAction={() => {}}
              />
            </Div>
          </Fade>
        </Slide>
      </Div>
      <Slide auto from={d.RIGHT}>
        <Fade auto>
          <Resident src="r0"/>
        </Fade>
      </Slide>
    </Div>
  );
};

export default Guide;
