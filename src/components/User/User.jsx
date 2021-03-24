import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ props }) => (
  <>
    <p className="user">
      <img 
        src="https://rebrand.ly/o4ky5oo"
        alt="user"
        className="user--image"
      />
      <span className="user--data">
        {`${props.name} | ${props.email} `}
      </span>
      <br />
      <br />
      {`City: ${props.address.city} | Street: ${props.address.street}`}
      {` / ${props.address.zipcode} / ${props.address.suite} `}
    </p>
  </>
);

User.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
  }),
};
