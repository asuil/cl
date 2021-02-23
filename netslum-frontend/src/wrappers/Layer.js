import Div from "./Div";

const Layer = (props) => {
  return (
    <Div
      {...props}
      style={{
        ...props.style,
        top: props.top ? 0 : 'auto',
        bottom: props.bottom ? 0 : 'auto',
        right: props.left ? 'auto' : 0,
        left: props.right ? 'auto' : 0,
        position: 'absolute',
      }}
    />
  );
};

export default Layer;
