import React from 'react';
import PropTypes from 'prop-types';

function User({ name, email, address }) {
  return (
    <div className="posts__user">
      <div className="posts__user_wrap">
        <span className="posts__user_name">
          {`Name: ${name}`}
        </span>
        <p>
          {`Email: ${email}`}
        </p>
      </div>
      <p className="posts__user_address">
        <p className="posts__user_address-title">
          Address
        </p>
        <span className="posts__user_address-city">
          {`City: ${address.city}`}
        </span>
        <span className="posts__user_address-street">
          {`Street: ${address.street}`}
        </span>
        <span className="posts__user_address-zip">
          {`Zip-code: ${address.zipcode}`}
        </span>
        <p />
      </p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired,
  }).isRequired,
};

export default User;
