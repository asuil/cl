import Div from "../wrappers/Div";
import Text from "../wrappers/Text";

import { Color as c, Font as f } from "../utils";

const Header = () => (
  <Div bgcolor={c.BROWN} px={3} py={2}>
    <Text size={2} color={c.WHITE} font={f.MONOSPACE}>
      ./netslum
    </Text>
  </Div>
);

export default Header;
