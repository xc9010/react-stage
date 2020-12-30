
export const getramdon = () => (
  fetch('http://localhost:6060/getramdon', {
    method: 'GET',
  }).then(v => v.json())
);


export const getramdon1 = () => {};

