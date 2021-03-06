import PropTypes from 'prop-types';
import React from 'react';
import CommentList from '../CommentList';

import './User.scss';

export default function User({
  address,
  email,
  name,
  comments,
}) {
  const { city, street, suite, zipcode, geo } = address;
  const { lat, lng } = geo;

  return (
    <>
      <h3 className="user__name">
        {name}
      </h3>
      <a className="user__email" href={`mailto:${email}`}>
        {email}
      </a>
      <address className="user__address">
        {`City: ${city},`}
        <br />
        {`street: ${street},`}
        <br />
        {`suite: ${suite},`}
        <br />
        {`zipcode: ${zipcode},`}
        <br />
        <br />
        <a
          className="user__map"
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        >
          reference to map
        </a>
      </address>
      <CommentList
        comments={comments}
      />
    </>
  );
}

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
