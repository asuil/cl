const Resident = ({
  src,
}) => (
  <img
    width={200}
    src={`${process.env.PUBLIC_URL}/img/${src}.svg`}
    alt="ilustración residente"
  />
);

export default Resident;
