const Layer = ({
  bottom,
  right,
  left,
  children,
}) => (
  <div
    style={{
      bottom: bottom ? -50 : 'auto',
      right: left ? 'auto' : 0,
      left: right ? 'auto' : 0,
      position: 'absolute',
    }}
  >
    {children}
  </div>
);

export default Layer;
