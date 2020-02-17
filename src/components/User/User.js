import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;

  return (
    <div className="card">
      <div className="card-content">
        <p className="title">
          {name}
        </p>
        <p className="subtitle title">
          {email}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            {`${street}, ${suite} ${city}`}
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            {`${zipcode}, ${lat}, ${lng}`}
          </span>
        </p>
      </footer>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }),
  }).isRequired,
};
