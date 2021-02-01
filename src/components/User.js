import React from 'react';
import PropTypes from 'prop-types';
import { TypeComment, TypeFullAdress } from '../types';
import { CommentList } from './CommentList';

export function User({ comments, name, email, address }) {
  return (
    <>
      <ul>
        <li>{`Author: ${name}, E-mail: ${email}`}</li>
        <li>
          Address:
          {` ${address.street}, ${address.suite}, ${address.city}, `}
        </li>
        <li>
          Location:
          {` Lat: ${address.geo.lat}; Long: ${address.geo.lng}`}
        </li>
        <CommentList comments={comments} />
      </ul>
    </>
  );
}

User.propTypes = {
  comments: PropTypes.arrayOf(TypeComment).isRequired,
  address: TypeFullAdress.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
