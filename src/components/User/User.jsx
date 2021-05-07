import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './User.scss';

export const User = ({
  className,
  name,
  email,
  address,
}) => (
  <section className={classNames('User', className)}>
    <span className="User__name">{name}</span>
    <div className="User__email">
      {email}
    </div>
    { address
      && (
      <div className="User__address">
        Address:
        <ul className="User__address-list">
          <li>{address.street}</li>
          <li>{address.suite}</li>
          <li>{address.city}</li>
          <li>{address.zipcode}</li>
        </ul>
      </div>
      )
    }
  </section>
);

User.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }),
};

User.defaultProps = {
  className: '',
  email: '',
  address: null,
};
