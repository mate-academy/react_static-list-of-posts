import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ id, name, email, address }) => (
  <p className="authorInfo">
    {`Author: `}
    <a href={`link_to_user${id}`} className="authorInfo__name">
      {name}
    </a>
    {', '}
    {`mail: `}
    <a href={`@mailto: ${email}`} className="authorInfo__mail">
      {email}
    </a>
    {', '}
    <span className="authorInfo__city">
      {`city: ${address.city}.`}
    </span>
  </p>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string),
};

User.defaultProps = {
  address: {},
};
