import Div from "../wrappers/Div";
import Text from "../wrappers/Text";

import { Color as c, Font as f } from "../utils";

const Footer = () => (
  <Div px={5} py={3} bgcolor={c.BLACK} color={c.WHITE}>
    <Text font={f.REGULAR}>
      © Ariel Suil Aravena, 2021
    </Text>
  </Div>
);

export default Footer;
