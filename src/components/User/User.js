import React from 'react';
import PropTypes from 'prop-types';

export const propTypesUser = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    suite: PropTypes.string,
  }).isRequired,
};

export const User = ({ name, email, address }) => (
  <>
    <h3>{`Posted by: ${name}`}</h3>
    <p>
      {`Email: ${email}.
       Address: ${address.city} 
       ${address.street} ${address.suite}`}
    </p>
  </>
);

User.propTypes = propTypesUser;
