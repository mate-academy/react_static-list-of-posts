import React from 'react';
import CommentList from '../CommentList';
import { CommentType } from '../CommentType/CommentType';
import { UserType } from '../UserType/UserType';

export default function User({ user, comments }) {
  const { address, email, name } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;

  return (
    <>
      <h3>
        {name}
      </h3>
      <a href={`malito:${email}`}>
        {email}
      </a>
      <address>
        {`City: ${city}`}
        <br />
        {`Street ${street}`}
        <br />
        {`Suite: ${suite}`}
        <br />
        {`Zipcode: ${zipcode}`}
        <br />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        >
          Geo
        </a>
      </address>
      <CommentList comments={comments} />
    </>
  );
}

User.propTypes = {
  user: UserType.isRequired,
  comments: CommentType.isRequired,
};
