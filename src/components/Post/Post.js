import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';

export const Post = ({ title, body, author, comments }) => (
  <>
    <div className="posts__content">
      <span className="posts__data">
        <div className="posts__post-title">
          {`Title: ${title}`}
        </div>
        <div className="posts__post-content">
          {body}
        </div>
      </span>
      <span className="posts__author">
        <User
          username={author.username}
          email={author.email}
          address={author.address}
        />
      </span>
    </div>

    <span className="posts__comments">
      <CommentList comments={comments} />
    </span>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.objectOf(
        PropTypes.shape({
          street: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
