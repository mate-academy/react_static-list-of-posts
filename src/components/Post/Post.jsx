import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({ title, body, user, comments }) {
  return (
    <>
      <div className="post">
        <div className="post__title">{`Title: ${title}`}</div>
        <div className="post__body">{`Body: ${body}`}</div>
        <User
          name={user.name}
          email={user.email}
          address={user.address}
        />
      </div>
      <ul className="post__comment comment">
        <CommentList commentList={comments} />
      </ul>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
