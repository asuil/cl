import Div from "./Div";

const LayerWrap = (props) => {
  return (
    <Div
      {...props}
      style={{
        ...props.style,
        position: 'relative'
      }}
    />
  );
};

export default LayerWrap;
