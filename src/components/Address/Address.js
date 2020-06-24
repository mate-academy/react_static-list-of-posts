import React from 'react';
import './Address.css';
import { addressShape } from '../Shapes/AddressShape';

const Address = (props) => {
  const geo = {
    lat: props.geo.lat,
    lng: props.geo.lng,
  };

  return (
    <div className="address">
      <p>{getAddress(props)}</p>
      <p>{`Lat: ${geo.lat}, Lng: ${geo.lng}`}</p>
    </div>
  );
};

const getAddress = (props) => {
  const address = Object.assign({}, props);

  delete address.geo;

  return Object.values(address).join(', ');
};

Address.propTypes = addressShape.isRequired;

export default Address;
