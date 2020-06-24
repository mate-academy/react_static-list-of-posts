import React from 'react';
import PropTypes from 'prop-types';
import './Address.css';

const Address = (props) => {
  const geo = {
    lat: props.geo.lat,
    lng: props.geo.lng,
  };

  return (
    <div className="address">
      <p>{getAddress(props)}</p>
      <p>{`${geo.lat} ${geo.lng}`}</p>
    </div>
  );
};

const getAddress = (props) => {
  const address = Object.assign({}, props);

  delete address.geo;

  return Object.values(address).join(', ');
};

Address.propTypes = PropTypes.shape({
  city: PropTypes.string.isRequired,
  geo: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }),
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
}).isRequired;

export default Address;
