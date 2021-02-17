const Text = ({
  size,
  color,
  font,
  children,
}) => {
  return (
    <div
      style={{
        fontSize: `${size}rem` || 'inherit',
        fontFamily: font || 'inherit',
        color: color || 'inherit',
      }}
    >
      {children}
    </div>
  );
};

export default Text;
