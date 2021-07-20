import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

function stringPrettify(str) {
  return str[0].toUpperCase().concat(str.slice(1));
}

export const Post = ({ post }) => (
  <div className="callout large secondary">
    <h3>
      {stringPrettify(post.title)}
    </h3>
    <p>
      {stringPrettify(post.body)}
    </p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
