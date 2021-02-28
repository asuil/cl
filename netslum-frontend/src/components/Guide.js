import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
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

const Guide = () => {
  const [mobile, width] = useIsMobile(600);

  const MyDialogue = () => (
    <Fade auto delay={800}>
      <Div bgcolor={c.BLACK} w={mobile ? width * 0.9 : 250}>
        <Dialogue
          dialogues={dialogues}
          lastAction={() => {}}
        />
      </Div>
    </Fade>
  );

  const MyResident = () => (
    <Fade auto>
      <Resident src="r0" size={mobile ? is.BIG : is.MEDIUM} />
    </Fade>
  );

  return mobile
    ? (
      <Div center>
        <MyResident />
        <MyDialogue />
      </Div>
    ) : (
      <Div flex>
        <Div center>
          <Slide auto delay={800} from={d.RIGHT}>
            <MyDialogue />
          </Slide>
        </Div>
        <Slide auto from={d.RIGHT}>
          <MyResident />
        </Slide>
      </Div>
    );
};

export default Guide;
