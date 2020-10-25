import React from 'react';
import PropTypes from 'prop-types';

import { UserShape } from './shapes/UserShape';

export const User = ({ user }) => (
  <div className="author">
    <div className="blockquote-footer">
      {user.name}
    </div>

    <hr className="my-2" />

    <address className="container">
      <div className="row">
        <div className="col-sm">
          <b>Location</b>
          <div>{user.address.city}</div>
          <div>
            {`${user.address.street} `}
            {user.address.suite}
          </div>
        </div>

        <div className="col-sm">
          <b>Zipcode:</b>
          <div>{user.address.zipcode}</div>

          <b>Email:</b>
          <br />
          <a
            href={`mailto:${user.email}`}
            style={{ color: 'red' }}
          >
            {user.email}
          </a>
        </div>
      </div>
    </address>
  </div>
);

User.propTypes = {
  user: PropTypes.shape(UserShape).isRequired,
};
