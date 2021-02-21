import Div from "./Div";

const Layer = (props) => {
  const {
    top,
    bottom,
    right,
    left,
    children,
  } = props;
  return (
    <Div
      {...props}
      style={{
        top: bottom ? 'auto' : 0,
        bottom: top ? 'auto' : 0,
        right: left ? 'auto' : 0,
        left: right ? 'auto' : 0,
        position: 'absolute',
      }}
    >
      {children}
    </Div>
  );
};

export default Layer;
