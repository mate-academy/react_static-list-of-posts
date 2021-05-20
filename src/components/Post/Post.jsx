import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = function({ title, body, user, comments }) {
  return (
    <div className="Post">
      <h2>
        Post title:
        {title}
      </h2>
      <p>
        <b>Text:</b>
        {' '}
        {body}
      </p>
      <User {...user} />
      <CommentList comments={comments} />
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  user: PropTypes.PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Post.defaultProps = {
  body: 'User left empty blank',
};

export default Post;
