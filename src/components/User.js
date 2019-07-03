import React from 'react';

import PropTypes from 'prop-types';

const User = props => (
  <>
    <div className="user">
      <h2>{props.user.name}</h2>
      <h3>{props.user.email}</h3>
      <p>
        {props.user.address.city}
        {props.user.address.street}
        <p>
          zipcode:
          {props.user.address.suite}
        </p>
      </p>
    </div>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

export default User;
