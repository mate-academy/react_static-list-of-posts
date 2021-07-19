import React from 'react';
import propTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({ title, body, user, comments }) {
  return (
    <>
      <h3>
        {`Post Title: ${title}`}
      </h3>
      <p>
        {body}
      </p>
      <User
        name={user.name}
        email={user.email}
        address={user.address}
      />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    address: propTypes.string.isRequired,
  }).isRequired,
  comments: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
    }),
  ).isRequired,
};
