import React from 'react';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  return (
    <>
      <div className="user">
        Name:
        {' '}
        <b>
          {name}
        </b>
        {' '}
        <section>
          {email}
        </section>
        Adress:
        <address>
          {address.street}
          ,
          {' '}
          {address.suite}
          ,
          {' '}
          {address.city}
          ,
          {' '}
          {address.zipcode}
        </address>
      </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }).isRequired,
};
