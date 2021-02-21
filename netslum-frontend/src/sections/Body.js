import Text from "../wrappers/Text";
import Div from "../wrappers/Div";
import Layer from "../wrappers/Layer";
import LayerWrap from "../wrappers/LayerWrap";
import { Color as c } from "../utils";
import Guide from "../components/Guide";

const Body = () => {
  return (
    <LayerWrap h="100vh" bgcolor={c.SOFT_BROWN} color={c.WHITE}>
      <Div pt={16} px={6}>
        <Text size={3}>
          contenido
        </Text>
      </Div>
      <Layer pb={16} right bottom>
        <Guide />
      </Layer>
    </LayerWrap>
  );
};

export default Body;
