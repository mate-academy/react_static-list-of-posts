import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

function Post({ title, body, user, comments }) {
  return (
    <>
      <h2>
        POST:
        {title}
      </h2>
      <p>{body}</p>
      <User {...user} />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Post;
