import Div from "./Div";

const LayerWrap = (props) => {
  const { children } = props;
  return (
    <Div
      {...props}
      style={{position: 'relative'}}
    >
      {children}
    </Div>
  );
};

export default LayerWrap;
