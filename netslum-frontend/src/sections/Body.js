import Text from "../wrappers/Text";
import Div from "../wrappers/Div";
import Layer from "../wrappers/Layer";
import LayerWrap from "../wrappers/LayerWrap";
import Slide from "../wrappers/Slide";
import Resident from "../components/Resident";
import { Color as c, Direction as d } from "../utils";

const Body = () => {
  return (
    <Div py={16} bgcolor={c.SOFT_BROWN} color={c.WHITE}>
    <LayerWrap>
      <Div px={6}>
        <Text size={3}>
          contenido
        </Text>
      </Div>
      <Layer right bottom>
        <Slide auto={300} from={d.RIGHT}>
          <Resident src="r0"/>
        </Slide>
      </Layer>
    </LayerWrap>
  </Div>
  );
};

export default Body;
