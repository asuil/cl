import Header from "./sections/Header";
import Body from "./sections/Body";
import Footer from "./sections/Footer";
import LayerWrap from "./wrappers/LayerWrap";
import Layer from "./wrappers/Layer";

const Main = () => (
  <LayerWrap>
    <Layer>
      <Header />
    </Layer>
    <Body />
    <Layer bottom>
      <Footer />
    </Layer>
  </LayerWrap>
);

export default Main;
