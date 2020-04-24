import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <h2 className="post__title">
      {title}
    </h2>
    <p className="post__body">
      {body}
    </p>
    <User {...user} />
    <p>
      <strong>Comments:</strong>
    </p>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number,
    ]),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Post;
