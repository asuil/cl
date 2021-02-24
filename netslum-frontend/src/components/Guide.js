import {useState, useEffect} from 'react';
import Slide from "../wrappers/Slide";
import {Color as c, Direction as d, Font as f} from "../utils";
import Div from "../wrappers/Div";
import Text from "../wrappers/Text";
import Fade from "../wrappers/Fade";
import LayerWrap from "../wrappers/LayerWrap";
import Layer from "../wrappers/Layer";
import Resident from "./Resident";

const dialogues = [
  'Hola Mundo!',
  'Bienvenidxs al netslum de asuil.cl!',
  'Este espacio existe para manejar información online para tus proyectos de una manera más cómoda y...',
  '¡TOTALMENTE GRATIS!',
  'Para comenzar solo presiona aquí y regístrate!'
];

const last = 4;

const Guide = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Div flex onClick={() => !loading && (current === last ? console.log('register') : setCurrent(current + 1))}>
      <Slide auto={2000} from={d.RIGHT}>
        <Div bgcolor={c.BLACK} mt={5} w={250}>
          <Fade auto={3000}>
            <LayerWrap>
              <Div pl={2} pr={3} pt={2} pb={3}>
                <Text font={f.REGULAR}>
                  {dialogues[current]}
                </Text>
              </Div>
              <Layer bottom right>
                <Div pr={1}>
                  {current !== last
                    ? (
                      <span className="material-icons">keyboard_arrow_down</span>
                    ) : (
                      <span className="material-icons">keyboard_arrow_right</span>
                    )
                  }
                </Div>
              </Layer>
            </LayerWrap>
          </Fade>
        </Div>
      </Slide>
      <Slide auto={500} from={d.RIGHT}>
        <Fade auto={500}>
          <Resident src="r0"/>
        </Fade>
      </Slide>
    </Div>
  );
}

export default Guide;
