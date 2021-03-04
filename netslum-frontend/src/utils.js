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

export const ImageSize = {
  SMALL: 100,
  MEDIUM: 200,
  BIG: 300,
};

export const Netsulm = () => {
  const e = Math.random() > 0.9 ? '3' : 'e';
  const l = Math.random() > 0.6 ? '!' : 'l';
  const u = Math.random() > 0.7 ? '¿' : 'u';
  return `./n${e}ts${l}${u}m`;
};

export const addDynamicKeyToObject = (key, value, obj) => {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
};
