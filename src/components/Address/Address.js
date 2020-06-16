import React from 'react';
import PropTypes from 'prop-types';
import './Address.css';

const Address = props => (
  <div className="post__address">
    <small>{props.street}</small>
    &nbsp;
    <small>{props.suit}</small>
    &nbsp;
    <small>{props.city}</small>
    &nbsp;
    <small>{props.zipcode}</small>
    &nbsp;
    <small>
      {props.geo.lat}
      , &nbsp;
      {props.geo.lng}
    </small>
  </div>
);

export { Address };

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
