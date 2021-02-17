import Div from "../components/Div";
import Text from "../components/Text";

import { Color as c, Font as f } from "../utils";

const Header = () => (
  <Div bgcolor={c.BROWN} px={3} py={2}>
    <Text size={2} color={c.WHITE} font={f.MONOSPACE}>
      ./netslum
    </Text>
  </Div>
);

export default Header;
