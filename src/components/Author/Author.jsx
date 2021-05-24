import React from 'react';

const Author = ({ name, email, address }) => (
  <div>
    <div>
      {name}
    </div>
    <div>
      {email}
    </div>
    <div>
      {address.city}
      {' --- '}
      {address.street}
      {' --- '}
      {address.suite}
      {' --- '}
      {address.zipcode}
      {' --- '}
      {`geo: ${address.geo.lat}, ${address.geo.lng}`}
    </div>
  </div>
);

export default Author;
