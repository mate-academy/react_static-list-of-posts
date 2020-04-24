import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <li className="post">
      <h2>
        {title}
      </h2>
      <p>
        {body}
      </p>
      <User user={user} />
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Post;
