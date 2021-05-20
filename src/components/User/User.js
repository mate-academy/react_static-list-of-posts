import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

const author = 'Author';

export const User = ({ name, email, address }) => (
  <>
    <div className="App__post-author">
      <p>
        {`${author}: ${name}`}
      </p>

      <a href={email}>
        {email}
      </a>

      <p>
        {`${address.suite}, ${address.street}, ${address.city}`}
      </p>
    </div>
  </>
);

User.defaultProps = {
  email: 'No',
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  address: PropTypes.shape({
    suite: PropTypes.string,
    city: PropTypes.string.isRequired,
    street: PropTypes.string,
  }).isRequired,
};
