export const Color = {
  BROWN: '#3c2616',
  WHITE: '#f0f0f0',
  BLACK: '#202020',
  SOFT_BROWN: '#7e4635',
};

export const Font = {
  MONOSPACE: 'Space Mono, monospace',
  REGULAR: 'Poppins, sans-serif',
};

export const Direction = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom',
};

export const Netsulm = () => {
  const ch3 = Math.random() > 0.6 ? '3' : 'e';
  const ch4 = Math.random() > 0.9 ? '\\' : 't';
  const ch6 = Math.random() > 0.9 ? '!' : 'l';
  const ch7 = Math.random() > 0.7 ? '¿' : 'u';
  return `./n${ch3}${ch4}s${ch6}${ch7}m`;
};
