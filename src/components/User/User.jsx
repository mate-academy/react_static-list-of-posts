import React from 'react';
import './User.scss';

import { CommentList } from '../CommentList';
import { TypeUser, TypeComments } from '../../Types/types';

export function User({
  user,
  comments,
}) {
  const { city, street, suite, zipcode, geo } = user.address;
  const { lat, lng } = geo;

  return (
    <>
      <h3 className="user__name">
        {user.name}
      </h3>
      <a className="user__email" href={`mailto:${user.email}`}>
        {user.email}
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
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
