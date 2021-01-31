import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from './CommentList';

export function User({ postID, name, email,
  address: { street, suite, city, zipcode,
    geo: { lat, lng } } }) {
  return (
    <>
      <ul>
        <li>{`Author: ${name}, E-mail: ${email}`}</li>
        <li>
          Address:
          {` ${street}, ${suite}, ${city}, ${zipcode} `}
        </li>
        <li>
          Location:
          {` Lat: ${lat}; Long: ${lng}`}
        </li>
        <CommentList id={postID} />
      </ul>
    </>
  );
}

User.propTypes = {
  postID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
