import { Color as c } from "../utils";

import Text from "../wrappers/Text";
import Div from "../wrappers/Div";
import Layer from "../wrappers/Layer";
import LayerWrap from "../wrappers/LayerWrap";

import Character0 from "../components/Character0";

const Body = () => (
  <Div px={6} py={16} bgcolor={c.SOFT_BROWN} color={c.WHITE}>
    <LayerWrap>
      <Text size={3}>
        contenido
      </Text>
      <Layer right bottom>
        <Character0 />
      </Layer>
    </LayerWrap>
  </Div>
);

export default Body;
