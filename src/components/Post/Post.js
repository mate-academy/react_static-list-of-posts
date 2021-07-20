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
    PropTypes.shape({}),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
