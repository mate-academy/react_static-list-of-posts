import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import { Address } from '../Address/Address';

const User = props => (
  <div className="post__author">
    <h4>{props.name}</h4>
    <a href={`mailto:${props.email}`} className="post__email">
      <small>{props.email}</small>
    </a>
    <Address {...props.address} />
  </div>
);

export { User };

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.any).isRequired,
};
