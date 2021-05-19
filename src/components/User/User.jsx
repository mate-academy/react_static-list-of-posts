import React from 'react';
import PropTypes from 'prop-types';

const User = function({ name, email, address }) {
  return (
    <div className="User">
      <p>
        {`Name: ${name}`}
      </p>
      <p>
        {`Email: ${email}`}
      </p>
      <p>
        {`Adress: ${address.city} ${address.street} ${address.suite}`}
      </p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

User.defaultProps = {
  name: 'Name not found',
  email: 'Error when display email',
};

export default User;
