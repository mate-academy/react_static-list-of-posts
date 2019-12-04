import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user: { name, email, address } }) => (
  <section>
    <p>{name}</p>
    <p>{email}</p>

    <address>
      {Object.entries(address).map(line => (typeof line[1] === 'object'
        ? Object.entries(line[1]).map(l => (
          <>
            <u>
              {l[0]}
              {' '}
              {l[1]}
            </u>
            <br />
          </>
        ))
        : (
          <>
            {line[0]}
            {' '}
            {line[1]}
            <br />
          </>
        )))}
    </address>
  </section>
);

User.propTypes = { user: PropTypes.shape.isRequired };

export default User;
