import React from 'react';
import PropTypes from 'prop-types';

const Address = props => (
  <div>
    <p>{props.street}</p>
    <p>{props.suit}</p>
    <p>{props.city}</p>
    <p>{props.zipcode}</p>
    <p>
      {`${props.geo.lat} ${props.geo.lng}`}
    </p>
  </div>
);

Address.defaultProps = {
  suit: '',
};

Address.propTypes = {
  street: PropTypes.string.isRequired,
  suit: PropTypes.string,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Address;
